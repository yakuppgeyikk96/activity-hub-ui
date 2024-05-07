import { IComment } from "../comments/IComment";
import { IUser } from "../users/IUser";

export interface IActivity {
  _id: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  duration: number;
  capacity: number;
  tags: string[];
  comments: IComment[];
  rating: number;
  participants: IUser[];
  createdBy: IUser;
  createdAt: Date;
  updatedAt: Date;
}
