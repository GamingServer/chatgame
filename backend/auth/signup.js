const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("../module/jwtsign");
const prisma = new PrismaClient();

const signup = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;

    const user = await prisma.Users.findMany({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    if (user.length > 0) {
      res.status(400).json({ error: "User already exists" });
    } else {
      let profilePic;
      if(gender === "male"){
        profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
      }
      else{
        profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
      }
      const newUser = await prisma.Users.create({
        data: {
          username: username,
          email: email,
          password: password,
          gender: gender,
          profilePic: profilePic
        },
      });
      generateToken(newUser, res);
      res
        .status(200)
        .json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    console.log("error in signin", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signup;
