import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'Thanks for signing up. Your account has been created.'})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})