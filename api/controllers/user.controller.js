import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
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
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (err) {
    console.error('Error creating user:', err); // Log the full error for debugging
    next(err); // Pass the error to the error handler middleware
  }
};
