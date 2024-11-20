import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { validateAuth } from '../middleware/validation.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Register
router.post('/register', validateAuth, async (req, res) => {
  try {
    const { email, password, name, organization, userType } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      email,
      password,
      name,
      organization,
      userType
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id, userType },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({ token, userType, name: user.name });
  } catch (error) {
    console.error('Error during registration:', error); // Log detailed error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, userType: user.userType, name: user.name });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;