const User = require("../model/User");
const { success } = require("../utils/responseHandler");

// Get all users
exports.getUser = async (req, res) => {
  try {
    const newUser = await User.create({
      // Any other fields you want to set here can be added
    });

    // 2. After the user is created, set the username to 'guest_${user_id}'
    const username = `guest_${newUser.user_id}`;

    // 3. Update the user record with the generated username
    await newUser.update({ username });
    success({ res, data: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      success({ res, data: user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    const user = await User.create({ name, email, password, address, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
      user.address = address || user.address;
      user.role = role || user.role;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
};
