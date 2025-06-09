const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { connect } = require("http2");

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

    const adreadyPlayed = await prisma.PointTable.findMany({
      where: {
        userId: senderId.id,
        category: {
          category: category,
        },
      },
    });

    if (adreadyPlayed.length > 0) {
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
    makeTeams(req);
    res.json(point);
  } catch (e) {
    console.log("Error in upload points", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const ApprovePoints = async (req, res) => {
  try {
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
          username: username, // case-sensitive match
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

const makeTeams = async (req) => {
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
    console.log(newTeam);
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
  }
};

module.exports = { ApprovePoints, isPlayerAlreadyPlayed, uploadPoints, upload };
