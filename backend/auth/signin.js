const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("../module/jwtsign");
const prisma = new PrismaClient();

const signin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.status(400).json({ error: "Please fill out all fields." });
      return;
    }

    const user = await prisma.Users.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      if (user.password === password) {
        generateToken(user, res);

        res
          .status(200)
          .json({ message: "User logged in successfully", user: user });
      } else {
        res.status(400).json({ error: "Incorrect password" });
      }
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signin;
