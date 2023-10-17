import { User } from "@prisma/client"
import { prisma } from "../../../libs/prisma"
import { NextResponse } from "next/server"
import { nanoid } from "nanoid"

export async function GET() {
  const user = await prisma.user.findMany()
  console.log(user)
  return NextResponse.json(user)
}

// login and autologin
export async function PUT(request: Request) {
  try {
    const token = localStorage.getItem("item");
    const {email, password} = await request.json();
    const user = await prisma.user.findUnique({
      where: { email: email},
    });
    const userReq = user?.password === password
      ? await prisma.user.update({
        where: {email: email, password: password},
        data: {token: token}
      })
      : new Error("Credenciales incorrectas...");
  } catch (error: any) {
    NextResponse.json(error.message)
  }
}

// { "name": "Gabriel", "lastname": "Paez", "email": "Paez@gmail.com", "history": [] }
export async function POST(request: Request) {
  const { firstname, lastname, token, email, password } = await request.json()
  const newTask = await prisma.user.create({
    data: {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      token: token,
      history: []
    }
  })
  return NextResponse.json(newTask)
}