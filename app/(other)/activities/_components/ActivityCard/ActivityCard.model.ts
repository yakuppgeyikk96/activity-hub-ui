import { IUser } from "@/app/_models/users/IUser";

export interface IActivityCardProps {
  gCloudBaseUrl: string | undefined;
  itemId: string;
  title: string;
  description: string;
  date: string;
  capacity: number;
  duration: number;
  location: string;
  user: Omit<IUser, "id" | "avatar" | "createdAt" | "updatedAt"> | null;
}
