// 650e642379da072745730779

import { prisma } from "../../../../libs/prisma";
import { NextResponse } from "next/server";

// dhdhdhd
export async function PUT(request: any, {params}: any) {
  try {
    const { firstname, lastname, email } = await request.json()
    const updateTask = await prisma.user.update({
      where: { id: params._id },
      data: { firstname, lastname, email }
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