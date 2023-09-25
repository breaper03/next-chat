"use client"

import {BsBookHalf, BsBookmarkHeart, BsGearFill, BsPlus, BsFolder, BsTrash3Fill} from "react-icons/bs"

import { Accordion, AccordionItem, Listbox, ListboxItem, Tooltip, User } from "@nextui-org/react"
import Link from "next/link"

const menu = [
  {
    title: "Favorites",
    icon: <BsBookmarkHeart/>,
    type: "link"
  },
  {
    title: "Add",
    icon: <BsPlus/>,
    type: "modal"
  },
  {
    title: "Saved",
    icon: <BsFolder/>,
    type: "modal"
  },
]

const history = [
  {
    title: "Trabajo Ingieneria",
    content: [
      {
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos ullam totam unde vero corporis eligendi quis libero, consequatur repellendus dicta magnam.", 
        prompt: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ],
    type: "Write Work",
    favorite: false
  },
  {
    title: "Trabajo Farmacologia",
    content: [
      {
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos ullam totam unde vero corporis eligendi quis libero, consequatur repellendus dicta magnam.", 
        prompt: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ],
    type: "Write Work",
    favorite: true
  },
  {
    title: "Trabajo Administracion",
    content: [
      {
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos ullam totam unde vero corporis eligendi quis libero, consequatur repellendus dicta magnam.", 
        prompt: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ],
    type: "Write Work",
    favorite: false
  },
]

const SideBar = () => {
  return (
    <>
      {/* box */}
      <div className="px-4 py-5 bg-slate-700 h-screen w-[19%] flex flex-col items-center justify-normal gap-6">
        {/* logo */}
        <div className="mb-2 flex gap-4 flex-nowrap items-center justify-between text-xl font-medium">
          <BsBookHalf/>
          <h1>{"DoChat>"}</h1>
        </div>
        {/* HISTORY AND MORE */}
        <div className="flex flex-col items-center justify-normal text-white w-full h-full">
          <div className="flex w-full items-center justify-center gap-8 mt-4">
            {
              menu.map(item => (
                <Tooltip content={item.title} color="foreground" placement="top" offset={15} showArrow={true}>
                  <div key={Math.random()} className="bg-[#00000086] hover:bg-[#2e3744] text-lg  p-2 rounded-lg ">
                    <Link href="settings">{item.icon}</Link>
                  </div>
                </Tooltip>
              ))
            }
          </div>
          <div className="flex flex-col w-full items-center justify-center mt-4">
            {
              history.map(item => (
                <div className="border-2 border-slate-500 w-full flex flex-wrap gap-2 px-2 py-2 rounded-lg bg-[#2e374486] text-white font-medium justify-between my-2">
                  <div className="flex flex-col items-start justify-between">
                    <h1 className="font-semibold text-indigo-200">{item.title}</h1>
                    <span className="text-base font-semibold">{item.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Tooltip content="Favorite" color="foreground" placement="top" offset={15} showArrow={true}>
                      <div key={Math.random()} className="bg-[#00000086] hover:bg-[#2e3744] items-center p-2 rounded-lg ">
                        <Link href="settings"><BsBookmarkHeart/></Link>
                      </div>
                    </Tooltip>
                    <Tooltip content="Delete" color="foreground" placement="top" offset={15} showArrow={true}>
                      <div key={Math.random()} className="bg-[#00000086] hover:bg-[#2e3744]  p-2 rounded-lg ">
                        <Link href="settings"><BsTrash3Fill/></Link>
                      </div>
                    </Tooltip>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* SETTING AND OPTIONS */}
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
          <div className="bg-[#00000086] hover:bg-[#2e3744] p-2 rounded-lg justify-end">
            <Tooltip content="Settings" color="foreground" placement="right" offset={15} showArrow={true}>
              <Link href="settings"><BsGearFill/></Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar