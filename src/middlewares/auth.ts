import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if(!req.headers.authorization) {
    res.status(401).json({ error: 'Token not provided' });
    return;
  }
  try{
    const [authType, token] = req.headers.authorization.split(' ');
    if(authType === 'Bearer') {
      JWT.verify(token as string, process.env.JWT_SECRET_KEY as string);
      next(); 
    }
  }catch(error){
    res.status(401).json({ error: 'Invalid token' });
  }
};
