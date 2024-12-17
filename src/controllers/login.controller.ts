import JWT from 'jsonwebtoken';
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '123') {
    const token = JWT.sign(
      { id: 1, username },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ status: 'success', token });
    return
  }

  res.status(401).json({ error: 'Invalid credentials' });
  return
};
