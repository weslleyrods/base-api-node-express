import {Request, Response } from 'express';
import  * as helloWorldModel from '../models/helloworld.model';

export const helloWorld = async () => {
  return helloWorldModel.helloWorld();
}