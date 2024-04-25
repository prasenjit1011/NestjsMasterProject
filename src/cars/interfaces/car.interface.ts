import { Document } from 'mongoose';

export interface ICar extends Document{
  readonly id:number;
  readonly carcolor:string;
}