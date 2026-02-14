const express = require("express");
const connectDB = require("./config/db");

const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
connectDB();

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
