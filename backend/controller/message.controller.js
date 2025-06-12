const { PrismaClient } = require("@prisma/client");
const {
  getUserToken,
  isUserOnline,
  getOnlineUsers,
  io,
} = require("../socket/socket");
const prisma = new PrismaClient();

const sendMessage = async (req, res) => {
  try {
    const message = req.body;
    const senderName = req.body.senderName;
    const reciverName = req.body.reciverName;

    const sender = await prisma.Users.findUnique({
      where: { username: senderName },
    });
    const receiver = await prisma.Users.findUnique({
      where: { username: reciverName },
    });

    if (!sender || !receiver)
      return res.status(404).json({ error: "User not found" });

    let conversation = await prisma.Conversations.findFirst({
      where: {
        AND: [
          { participants: { some: { id: sender.id } } },
          { participants: { some: { id: receiver.id } } },
        ],
      },
    });

    if (!conversation) {
      conversation = await prisma.Conversations.create({
        data: {
          participants: {
            connect: [{ id: sender.id }, { id: receiver.id }],
          },
        },
      });
    }

    let status = "sent";
    if (isUserOnline({ id: reciverName })) {
      if (getOnlineUsers().includes(reciverName)) {
        status = "seen";
      } else {
        status = "delivered";
      }
    }

    const newMessage = await prisma.Message.create({
      data: {
        senderId: sender.id,
        reciverId: receiver.id,
        message: message.message,
        status,
      },
      include: {
        sender: { select: { username: true } },
        reciver: { select: { username: true } },
      },
    });

    if (newMessage) {
      //   const lastMessage = await prisma.Message.findFirst({
      //     where: {
      //       sender: {
      //         isAdmin: false,
      //       },
      //       reciverId: receiver.id,
      //     },
      //     orderBy: {
      //       createdAt: "desc",
      //     },
      //   });
      await prisma.Conversations.update({
        where: { id: conversation.id },
        data: {
          messages: {
            connect: { id: newMessage.id },
          },
        },
      });

      // Emit message
      const token = getUserToken(reciverName);
      if (token) {
        io.to(token).emit("receiveMessage", { message: newMessage });
        io.to(token).emit("newMessage", { message: newMessage });
      }

      // Push notification
      //   const notifiactiontoken = await prisma.Users.findUnique({
      //     where: { username: receiverName },
      //     select: { notificationToken: true },
      //   });

      //   if (notifiactiontoken?.notificationToken) {
      //     await sendNotification(
      //       notifiactiontoken.notificationToken,
      //       senderName,
      //       message.message
      //     );
      //   }

      res.json(newMessage);
      //   if (!lastMessage.isChoice || (!lastMessage && message.choice_id)) {
      //     const token = getAdminToken({ id: senderName });
      //     if (!sender.isAdmin) {
      //       firstChoice({
      //         token: token,
      //         reciverId: sender.id,
      //         io: io,
      //         message: message.message,
      //         choice_id: message.choice_id,
      //       });
      //     }
      //   }
    }
  } catch (e) {
    console.error("Error in sendMassage controller:", e);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllUserMsg = async (req, res) => {
  const senderName = req.body.senderName;
  const reciverName = req.body.reciverName;

  const sender = await prisma.Users.findUnique({
    where: { username: senderName },
  });

  const receiver = await prisma.Users.findUnique({
    where: { username: reciverName },
  });

  if (!sender || !receiver)
    return res.status(404).json({ error: "User not found" });

  const conversation = await prisma.Conversations.findFirst({
    where: {
      AND: [
        { participants: { some: { id: sender.id } } },
        { participants: { some: { id: receiver.id } } },
      ],
    },
    include: {
      messages: {
        include: {
          sender: { select: { username: true } },
          reciver: { select: { username: true } },
        },
      },
    },
  });
  // const conversation = await conversations.find().populate("messages");
  //   const conversation = await prisma.Conversations.findMany({
  //     include: {
  //       messages: {
  //         include: {
  //           sender: { select: { username: true } },
  //           reciver: { select: { username: true } },
  //         },
  //       },
  //     },
  //   });
  if (conversation) res.json(conversation.messages);
};

async function getLastMessagesForAdmin(req, res) {
  // 1. Fetch messages involving admin, sorted by createdAt DESC
  const senderName = req.body.senderName;
  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { sender: { username: senderName } },
        { reciver: { username: senderName } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      sender: { select: { username: true } },
      reciver: { select: { username: true } },
    },
  });

  // 2. Group by other participant
  const seenUsers = new Set();
  const lastMessages = [];

  for (const msg of messages) {
    const otherUser =
      msg.sender.username === senderName
        ? msg.reciver.username
        : msg.sender.username;

    if (!seenUsers.has(otherUser)) {
      seenUsers.add(otherUser);
      lastMessages.push(msg);
    }
  }

  res.json(lastMessages); // lastMessages;
}

module.exports = { sendMessage, getAllUserMsg, getLastMessagesForAdmin };
