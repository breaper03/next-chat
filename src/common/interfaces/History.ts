export enum ChatRole {
  "api",
  "user"
}

export interface History {
  _id: string,
  title: string,
  messages: Message[],
  userId: string,
  createAt?: Date,
  UpdateAt?: Date
}

export interface Message {
  text: string,
  from: string,
  createAt?: Date,
  UpdateAt?: Date
}
