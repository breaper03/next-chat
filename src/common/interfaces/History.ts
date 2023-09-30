export interface History {
  _id: string,
  messages: Message[],
  favorite: boolean,
  userId: string,
  createAt?: Date,
  UpdateAt?: Date
}

export interface Message {
  _id: string,
  text: string,
  from: string,
  createAt?: Date,
  UpdateAt?: Date
}

const history: History = {
  _id: "1dfddfddfdf",
  messages: [
    {
      _id: "1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "user"
    },
    {
      _id: "2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "api"
    },
    {
      _id: "3",
      text: "hello world in python",
      from: "user"
    },
    {
      _id: "4",
      text: "print('hello world')",
      from: "api"
    },
    {
      _id: "5",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "user"
    },
    {
      _id: "6",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "api"
    },
    {
      _id: "7",
      text: "hello world in python",
      from: "user"
    },
    {
      _id: "8",
      text: "print('hello world')",
      from: "api"
    }
  ],
  favorite: false,
  userId: "1"
}
