export interface IUser {
  id: string;
  email: string;
  name: string;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: "individual" | "company" | "community";
}
