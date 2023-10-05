import { User } from "@prisma/client"
import { prisma } from "../../../libs/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const task = await prisma.user.findMany()
  console.log(task)
  return NextResponse.json(task)
}

export async function POST(request: Request) {
  const { name, lastname, email } = await request.json()
  const newTask = await prisma.user.create({
    data: {
      email,
      name,
      lastname,
    }
  })
  return NextResponse.json(newTask)
}