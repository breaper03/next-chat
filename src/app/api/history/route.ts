import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const history = await prisma.history.findMany()
  return NextResponse.json(history)
}

// {"title": "History 1", "userId": "651f078aec659cf31863f1dc", messages: [{text: "Hello", from: "api"}]}

export async function POST(request: Request) {
  const {title, userId} = await request.json()

  const newHistory = await prisma.history.create({
    data: {
      title: title,
      messages: [{text: "Hello", from: "api"}],
      userId: userId
    }
  })
  return NextResponse.json(newHistory)
}