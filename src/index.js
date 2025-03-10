// src/index.js

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api", userRoutes); // Mount user routes at /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

