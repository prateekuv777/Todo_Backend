const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(express.json());
connectDB();

app.use("/api", taskRoutes);

app.listen(5000, () => {
  console.log("My Server running on port 5000");
});
