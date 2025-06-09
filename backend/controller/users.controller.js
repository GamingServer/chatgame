const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUser = async (req, res) => {
  try {
    const username = req.body.username;
    const allUser = await prisma.users.findMany({
      where: {
        NOT: {
          username: username,
        },
      },
      select: {
        username: true,
        id: true,
        profilePic: true,
      },
    });

    res.status(200).json(allUser);
  } catch (error) {
    console.log("error in getAllUser", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUser,
};
