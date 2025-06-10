const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUser = async (req, res) => {
  try {
    const username = req.body.username;
    const allUser = await prisma.teams.findMany({
      where: {
        members: {
          some: {
            username: username,
          },
        },
      },
      include: {
        members: {
          select: {
            username: true,
            profilePic: true,
            id: true,
          },
        },
      },
    });

    const user = allUser.map((user) => user.members);

    const uniqueUser = [
      ...new Set(
        user
          .flat()
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.id === item.id)
          )
      ),
    ];

    res.status(200).json(uniqueUser);
  } catch (error) {
    console.log("error in getAllUser", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUser,
};
