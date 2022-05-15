import { Express } from 'express';

export interface TypedRequestBody<T> extends Express.Request {
    body: T 
}

export interface Workout {
  name: string  
  mode: string
  equipment: Array<string> 
  exercises: Array<string>
  trainerTips: Array<string>
}