const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Import routes
const testRoute = require("./routes/testRoute");

// Use routes
app.use("/api/test", testRoute);

app.get("/", (req, res) => {
  res.send("Green Campus Backend Running 🌱");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});