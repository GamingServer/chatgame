const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");
const limit = rateLimit({
  windowMs: 1000,
  max: 100,
  message: "to many request",
});
require("dotenv").config();
const { app, server } = require("./socket/socket");
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(limit);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/api/auth", require("./routes/auth.routes"));

app.use("/api/message", require("./routes/message.routes"));

app.use("/api/users", require("./routes/users.routes"));

app.use("/api/category", require("./routes/category.route"));

app.use("/api/game", require("./routes/game.routes"));

server.listen(process.env.PORT ?? 5000, () => {
  console.clear();
  console.log("Server started on port ", process.env.PORT ?? 5000);
});
