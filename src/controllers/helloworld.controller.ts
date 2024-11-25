import {Request, Response, RequestHandler } from 'express';
import { helloWorld as helloWorldService } from '../services/helloworld.service';

export const helloWorld: RequestHandler = async (req, res) => {
  try {
    const result = await helloWorldService();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
