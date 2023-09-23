"use client"

import {BsBookHalf, BsBookmarkHeart, BsGearFill} from "react-icons/bs"

import { Accordion, AccordionItem, Listbox, ListboxItem, Tooltip, User } from "@nextui-org/react"
import Link from "next/link"

const menu = [
  {
    title: "Favorites",
    icon: <BsBookmarkHeart/>,
    link: "lolazo"
  },
]

const SideBar = () => {
  return (
    <>
      {/* box */}
      <div className="px-4 py-5 bg-slate-700 h-screen w-1/6 flex flex-col items-center justify-normal gap-6">
        {/* logo */}
        <div className="mb-2 flex gap-4 flex-nowrap items-center justify-between text-xl font-medium">
          <BsBookHalf/>
          <h1>{"DoChat>"}</h1>
        </div>
        <div className="mb-2 flex gap-4 flex-nowrap items-center justify-evenly text-xl font-medium">
          <div className="">
            <User   
              name="Jane Doe"
              description="janedoe@gmail.com"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
              }}
            />
          </div>
          <div className="bg-[#00000086] p-2 rounded-lg ">
            <Tooltip content="Settings" color="foreground" placeholder="right">
              <Link href="settings"><BsGearFill/></Link>
            </Tooltip>
          </div>
        </div>
        {/* HISTORY AND MORE */}
        <div className="flex flex-col items-center justify-normal text-white w-full h-full">
          csm no se me ocurre un dise;o
        </div>
      </div>
    </>
  )
}

export default SideBar