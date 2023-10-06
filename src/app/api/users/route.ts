import { User } from "@prisma/client"
import { prisma } from "../../../libs/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const user = await prisma.user.findMany()
  console.log(user)
  return NextResponse.json(user)
}

// { "name": "Gabriel", "lastname": "Paez", "email": "Paez@gmail.com", "history": [] }
export async function POST(request: Request) {
  const { firstname, lastname, email } = await request.json()
  const newTask = await prisma.user.create({
    data: {
      email: email,
      firstname: firstname,
      lastname: lastname,
      history: []
    }
  })
  return NextResponse.json(newTask)
}