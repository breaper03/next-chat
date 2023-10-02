// 650e642379da072745730779

import { prisma } from "../../../../libs/prisma";
import { NextResponse } from "next/server";

// dhdhdhd
export async function PUT(request: any, {params}: any) {
  try {
    const { name, lastname, email } = await request.json()
    const updateTask = await prisma.user.update({
      where: { id: params._id },
      data: { name, lastname, email }
    })
    return NextResponse.json(updateTask)
  } catch (error: any) {
    return NextResponse.json(error.message)
  }
}