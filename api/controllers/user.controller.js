import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res, next) => {
  const {username, email, password } = req.body;

  try {
    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: { id: newUser._id, username: newUser.name, email: newUser.email },
    });
  } catch (err) {
    console.error('Error creating user:', err); // Log the full error for debugging
    next(err); // Pass the error to the error handler middleware
  }
};



export const signInUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY, // Use your secret key from .env
      { expiresIn: '1h' } // Token expiration time
    );

    res.status(200).json({
      success: true,
      message: 'Sign-in successful',
      token,
    });
  } catch (err) {
    console.error('Error during sign-in:', err);
    next(err); // Pass the error to the error handler middleware
  }
};


export const getProfile = async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify token
    const user = await User.findById(decoded.userId).select("-password"); // Fetch user by ID, exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
