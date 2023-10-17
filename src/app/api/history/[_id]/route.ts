import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET(request: any, {params}: any) {
  try {
    const task = await prisma.history.findUnique({
      where: {id: params._id}
    })
    return NextResponse.json(task)
  } catch (error: any) {
    return NextResponse.json(error.message)
  }
}

export async function PUT(request: any, {params}: any) {
  try {
    const { title, messages } = await request.json()

    const getOne = await prisma.history.findUnique({
      where: { id: params._id }
    })

    const actualMessages = getOne === null ? [] : getOne.messages

    const updateTask = await prisma.history.update({
      where: { id: params._id },
      data: { title: title, messages: [...actualMessages, ...messages] }
    })

    return NextResponse.json(updateTask)
  } catch (error: any) {
    return NextResponse.json(error.message)
  }
}

export async function DELETE(request: any, {params}: any ) {
  try {
    const deleteTask = await prisma.history.delete({
      where: {id: params._id}
    })
    return NextResponse.json(deleteTask)
  } catch (error: any) {
    return NextResponse.json(error.message)
  }
}