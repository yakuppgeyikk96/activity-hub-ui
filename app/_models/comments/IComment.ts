import { IUser } from "../users/IUser";

export interface IComment {
  id: string;
  content: string;
  replies: IComment[];
  createdBy: Omit<IUser, "email">;
  createdAt?: Date;
  updatedAt?: Date;
}
