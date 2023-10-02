"use client"

import {BsBookHalf, BsBookmarkHeart, BsGearFill, BsPlus, BsFolder, BsTrash3Fill, BsBookmarkHeartFill} from "react-icons/bs"

import { Button, Input, Tooltip, User } from "@nextui-org/react"
import Link from "next/link"
import { BiStar, BiSolidStar } from "react-icons/bi" 
import { RiHistoryLine, RiRobot2Line, RiSearchLine } from "react-icons/ri" 
import { BiSolidKeyboard } from "react-icons/bi";



const menu = [
  {
    title: "Favorites",
    icon: <BiStar className="text-2xl"/>,
    type: "link"
  },
  {
    title: "History",
    icon: <RiHistoryLine className="text-2xl"/>,
    type: "modal"
  },
  {
    title: "Customize Prompt",
    icon: <RiRobot2Line className="text-2xl"/>,
    type: "modal"
  },
]

const history = [
  {
    title: "Trabajo Medicina",
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
    title: "Trabajo Arquitectura",
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
    title: "Trabajo Ingenieria",
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
    title: "Trabajo Medicina",
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
    title: "Trabajo Arquitectura",
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
    title: "Trabajo Ingenieria",
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
    title: "Trabajo Medicina",
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
    title: "Trabajo Arquitectura",
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
    title: "Trabajo Ingenieria",
    content: [
      {
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos ullam totam unde vero corporis eligendi quis libero, consequatur repellendus dicta magnam.", 
        prompt: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ],
    type: "Write Work",
    favorite: true
  },
]

const SideBar = () => {
  return (
    <>
      {/* box */}
      <div className="flex flex-col items-center justify-start h-full w-1/5 py-5 bg-[var(--hover-black-sb)] px-2">
        {/* LOGO TITLE */}
        <div className="flex-wrap items-center mt-5 rounded-lg justify-center flex w-fit px-8 font-semibold text-[var(--white-sb)]">
          <BiSolidKeyboard className="text-4xl"/>
          <span className="text-transparent">"</span>
          <h1 className="text-2xl text-[var(--green-sb)]">WorkType</h1>
        </div>
        <div className="flex-wrap items-center mt-8 rounded-lg justify-center flex w-full px-8 font-semibold text-[var(--white-sb)]">
          {/* Search Bar */}
          <div className="w-full">
            <Input
              key={1}
              radius="sm"
              type="text"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "font-semibold",
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <RiSearchLine className="text-emerald-500 dark:text-white/90 text-xl  pointer-events-none flex-shrink-0" />
              }
              //
            />
          </div>
          {/* Links */}
          <div className="flex flex-col items-center justify-center gap-y-3 w-full mt-5">
            {
              menu.map(item => (
                <Button className="hover:bg-[var(--blue-sb)] text-white hover:text-[--green-sb] bg-transparent w-full flex items-center justify-start text-[0.83em]" radius="sm">
                  <Link className="flex flex-wrap gap-4 items-center justify-center font-medium" href="users">
                    <span>{item.icon}</span> <h1 className="">{item.title}</h1>  
                  </Link>
                </Button>
              ))
            }
          </div>
        </div>
        <hr className="bg-[var(--green-sb)] my-5 w-full"/>
        <h1 className="font-semibold text-2xl">History</h1>
        <div className="flex-wrap overflow-y-scroll h-[93em] scroll-smooth items-center mt-8 rounded-lg justify-center flex w-full px-8 font-semibold text-[var(--white-sb)]">
          <div className="flex flex-col items-center gap-y-3 w-full mt-5 h-fit">
            {
              history.map(item => (
                <Button className="hover:bg-[var(--blue-sb)] text-white hover:text-[--green-sb] bg-transparent w-[97%] flex items-center justify-start text-sm" radius="sm">
                  <Link className="flex flex-wrap font-normal" href="users">
                    <h1>{item.title}</h1>  
                  </Link>
                </Button>
              ))
            }
          </div>
        </div>
        <div className="flex-wrap items-end mt-8 rounded-lg justify-center flex h-full w-full px-8 text-[var(--white-sb)]">
          <User   
            name="Junior Garcia"
            description={(
              <Link href="https://twitter.com/jrgarciadev">
                @jrgarciadev
              </Link>
            )}
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        </div>
      </div>
    </>
  )
}


export default SideBar