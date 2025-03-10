// src/controllers/userController.js

exports.getUsers = (req, res) => {
    res.json({ message: "Fetching all users" });
};

exports.createUser = (req, res) => {
    res.json({ message: "User created successfully" });
};
