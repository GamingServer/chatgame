const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");
const limit = rateLimit({
  windowMs: 1000 * 60,
  max: 100,
  message: "to many request",
});
require("dotenv").config();

const process = require("process");

// CPU Usage
const startUsage = process.cpuUsage();

// RAM Usage
// setInterval(() => {
//   const memory = process.memoryUsage();
//   console.clear();
//   const usage = process.cpuUsage(startUsage);
//   const user = usage.user / 1000000; // Convert microseconds to seconds
//   const system = usage.system / 1000000;
//   console.log(
//     `CPU Usage: User ${user.toFixed(2)}s, System ${system.toFixed(2)}s`
//   );
//   console.log("RAM Usage:");
//   console.log(`  RSS: ${(memory.rss / 1024 / 1024).toFixed(2)} MB`);
//   console.log(
//     `  Heap Total: ${(memory.heapTotal / 1024 / 1024).toFixed(2)} MB`
//   );
//   console.log(`  Heap Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`);
//   console.log(`  External: ${(memory.external / 1024 / 1024).toFixed(2)} MB`);
// }, 1000);
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

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});

server.listen(process.env.PORT ?? 5000, () => {
  // console.clear();
  console.log("Server started on port ", process.env.PORT ?? 5000);
});
