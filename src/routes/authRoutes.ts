import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const router = Router();

//User sign up
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
  } catch (err) {
    if(err instanceof Error){ 
      res.status(500).json({ error: err.message });
    }
    res.status(500).json( { error: 'Unexpected error '});
  }
});

//User Login
router.post('/signin', async (req: Request, res: Response) => {
  try{
    const msg = 'Unable to login. Please verify your login informations.'
    const { username, password } = req.body;
    const user = await User.findOne({ username })

    if(!user){
      return res.status(401).json({ message: msg });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
      return res.status(401).json({ message: msg })
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY || '', {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (err) {
    if(err instanceof Error){ 
      res.status(500).json({ error: err.message });
    }
    res.status(500).json( { error: 'Unexpected error '});
  }
});

export default router;