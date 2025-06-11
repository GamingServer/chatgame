const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { connect } = require("http2");
const { log } = require("console");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const username = req.params.username;
    const category = req.params.category;

    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${username}_${category}_${timestamp}${ext}`);
  },
});
const upload = multer({ storage });

const uploadPoints = async (req, res) => {
  try {
    const { username, category } = req.params;
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileUrl = `/uploads/${req.file.filename}`;

    const senderId = await prisma.Users.findUnique({
      where: {
        username: username,
      },
    });

    const alreadyPlayed = await prisma.PointTable.findMany({
      where: {
        userId: senderId.id,
        category: {
          category: category,
        },
      },
    });

    if (alreadyPlayed.length > 0) {
      const filename = path.join(__dirname, `../uploads/${req.file.filename}`);
      fs.unlink(filename, (err) => {
        if (err) {
          console.error(err);
        }
      });
      return res
        .status(400)
        .json({ message: "You have already played this category" });
    }

    let categoryData = await prisma.Category.findUnique({
      where: {
        category: category,
      },
    });

    let point;
    if (categoryData.isLimit) {
      if (categoryData.roundPlayedByPlayers < categoryData.MaxPlayerLimit) {
        // point = new pointTable({
        //   playerName: senderName,
        //   category: category,
        //   image: fileUrl,
        //   pendingPoint: categoryData.point,
        // });
        point = await prisma.PointTable.create({
          data: {
            userId: senderId.id,
            categoryId: categoryData.id,
            image: fileUrl,
            point: 0,
            pendingPoint: categoryData.point,
          },
          include: {
            users: {
              select: {
                username: true,
              },
            },
            category: {
              select: {
                category: true,
              },
            },
          },
        });
      } else {
        // await pointCategory.findOneAndUpdate(
        //   { category: categoryData.category },
        //   {
        //     $inc: { roundPlayedByPlayers: 1 },
        //   }
        // );
        await prisma.Category.update({
          where: {
            category: categoryData.category,
          },
          data: {
            roundPlayedByPlayers: {
              increment: 1,
            },
          },
        });
        // point = new pointTable({
        //   playerName: senderName,
        //   category: category,
        //   image: fileUrl,
        //   pendingPoint: 0,
        //   accepted: true,
        //   point: 0,
        // });
        point = await prisma.PointTable.create({
          data: {
            userId: senderId.id,
            categoryId: categoryData.id,
            image: fileUrl,
            pendingPoint: 0,
            accepted: true,
            point: 0,
          },
          include: {
            users: {
              select: {
                username: true,
              },
            },
            category: {
              select: {
                category: true,
              },
            },
          },
        });
      }
    } else if (!categoryData.isLimit) {
      // point = new pointTable({
      //   playerName: senderName,
      //   category: category,
      //   image: fileUrl,
      //   pendingPoint: categoryData.point,
      // });
      point = await prisma.PointTable.create({
        data: {
          userId: senderId.id,
          categoryId: categoryData.id,
          image: fileUrl,
          point: 0,
          pendingPoint: categoryData.point,
        },
        include: {
          users: {
            select: {
              username: true,
            },
          },
          category: {
            select: {
              category: true,
            },
          },
        },
      });
    }
    const team = await makeTeams(req, categoryData);
    sendMessageToLeader(req, team, point);
    res.json(point);
  } catch (e) {
    console.log("Error in upload points", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const ApprovePoints = async (req, res) => {
  try {
    console.log(req.body);

    const categoryData = await prisma.Category.findUnique({
      where: {
        category: req.body.category,
      },
    });
    let pendingPoint = 0;
    let point = 0;
    if (!req.body.isApprove) {
      pendingPoint = categoryData.point;
      point = 0;
      req.body.isApprove = true;
    } else {
      pendingPoint = 0;
      point = categoryData.point;
    }
    await prisma.PointTable.updateMany({
      where: {
        AND: [
          {
            category: {
              category: req.body.category,
            },
          },
          {
            userId: req.body.senderId,
          },
        ],
      },
      data: {
        pendingPoint: pendingPoint,
        point: point,
        accepted: req.body.isApprove,
      },
    });
    console.log(req.body.messageId);

    await prisma.Message.update({
      where: {
        id: req.body.messageId,
      },
      data: {
        isUsed: true,
      },
    });
  } catch (e) {
    console.log("Error in approve points", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const isPlayerAlreadyPlayed = async (req, res) => {
  try {
    const { username, category } = req.body;

    const player = await prisma.pointTable.findMany({
      where: {
        users: {
          username: username,
        },
        category: {
          category: category,
        },
      },
      include: {
        users: true,
        category: true,
      },
    });

    res.status(200).json({ played: player.length > 0, data: player });
  } catch (error) {
    console.log("Error in isPlayerAlreadyPlayed", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const makeTeams = async (req, categoryData) => {
  const { username, category } = req.params;
  const freeTeam = await prisma.Teams.findMany({
    where: {
      totalPlayer: {
        lt: 5,
      },
      category: category,
    },
  });
  const playerId = await prisma.Users.findUnique({
    where: {
      username: username,
    },
  });
  if (freeTeam.length == 0) {
    const newTeam = await prisma.Teams.create({
      data: {
        totalPlayer: 1,
        leaderId: playerId.id,
        members: {
          connect: {
            id: playerId.id,
          },
        },
        category: category,
      },
    });

    const result = await prisma.PointTable.updateMany({
      where: {
        users: {
          username: username,
        },
        category: {
          category: category,
        },
      },
      data: {
        point: categoryData.point,
        pendingPoint: 0,
        accepted: true,
      },
    });

    return newTeam;
  } else {
    const joinTeam = await prisma.Teams.update({
      where: {
        id: freeTeam[0].id,
      },
      data: {
        totalPlayer: {
          increment: 1,
        },
        members: {
          connect: {
            id: playerId.id,
          },
        },
      },
    });
    return joinTeam;
  }
};

const sendMessageToLeader = async (req, team, point) => {
  const leaderId = await prisma.Users.findUnique({
    where: {
      id: team.leaderId,
    },
  });
  const userId = await prisma.Users.findUnique({
    where: {
      username: req.params.username,
    },
  });
  console.log(req.params);
  if (userId.username === leaderId.username) {
    return;
  }
  let conversation = await prisma.Conversations.findFirst({
    where: {
      AND: [
        { participants: { some: { id: userId.id } } },
        { participants: { some: { id: leaderId.id } } },
      ],
    },
  });

  if (!conversation) {
    conversation = await prisma.Conversations.create({
      data: {
        participants: {
          connect: [{ id: userId.id }, { id: leaderId.id }],
        },
      },
    });
  }
  const newMessage = await prisma.Message.create({
    data: {
      senderId: userId.id,
      reciverId: leaderId.id,
      message: `${req.params.username} has joined the team`,
      type: "approver",
      isChoice: true,
      category: req.params.category,
      image: point.image,
    },
  });
  if (newMessage) {
    const conversation1 = await prisma.Conversations.update({
      where: {
        id: conversation.id,
      },
      data: {
        messages: {
          connect: { id: newMessage.id },
        },
      },
    });
  }
};

module.exports = { ApprovePoints, isPlayerAlreadyPlayed, uploadPoints, upload };
