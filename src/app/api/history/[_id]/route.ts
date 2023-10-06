import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

// export async function PUT(request: Request, {params}: any) {
//   try {
//     const { title } = await request.json();
//     const getHistory = await prisma.history.findUnique({
//       where: {id: params._id}
//     });

//     const update = prisma.history.update({
//       where: {id: params._id},
//       data: {...getHistory, title}
//     });

//     return NextResponse.json(update)
//   } catch (error: any) {
//     return NextResponse.json(error.message)
//   }
// }

// {"title": "History 1", "userId": "651f078aec659cf31863f1dc", messages: [{text: "Hello", from: "api"}]}
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
  console.log(params._id)
  try {
    const deleteTask = await prisma.user.delete({
      where: {id: params._id}
    })
    return NextResponse.json(deleteTask)
  } catch (error: any) {
    return NextResponse.json(error.message)
  }
}