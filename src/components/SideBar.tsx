"use client"

import {BsBookHalf, BsBookmarkHeart, BsGearFill, BsPlus, BsFolder, BsTrash3Fill, BsBookmarkHeartFill} from "react-icons/bs"

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Tooltip, User } from "@nextui-org/react"
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
  },
]

const SideBar = () => {
  return (
    <>
      {/* box */}
      <div className="flex flex-col items-center justify-start h-full w-1/5 py-5 bg-[var(--hover-black-sb)] px-2">
        {/* LOGO TITLE */}
        <Link href="/" className="flex-wrap items-center mt-5 rounded-lg justify-center flex w-fit px-8 font-semibold text-[var(--white-sb)]">
          <BiSolidKeyboard className="text-4xl"/>
          <span className="text-transparent">"</span>
          <h1 className="text-2xl text-[var(--yellow-sb)]">WorkType</h1>
        </Link>
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
                <Button className="hover:bg-[var(--blue-sb)] text-white hover:text-[--yellow-sb] bg-transparent w-full flex items-center justify-start text-[0.83em]" radius="sm">
                  <Link className="flex flex-wrap gap-4 items-center justify-center font-medium" href="users">
                    <span>{item.icon}</span> <h1 className="">{item.title}</h1>  
                  </Link>
                </Button>
              ))
            }
          </div>
        </div>
        <hr className="bg-[var(--yellow-sb)] my-5 w-full"/>
        <h1 className="font-mono text-2xl cursor-pointer hover:text-[--yellow-sb] transition-all delay-100">History</h1>
        <div className="flex-wrap overflow-y-scroll h-[93em] scroll-smooth items-center mt-4 rounded-lg justify-center flex w-full px-8 font-semibold text-[var(--white-sb)]">
          <div className="flex flex-col items-center gap-y-3 w-full h-fit">
            {
              history.map(item => (
                <Button className="hover:bg-[var(--blue-sb)] text-white hover:text-[--yellow-sb] bg-transparent w-[97%] flex items-center justify-start text-sm" radius="sm">
                  <Link className="flex flex-wrap font-normal" href="users">
                    <h1>{item.title}</h1>  
                  </Link>
                </Button>
              ))
            }
          </div>
        </div>
        <div className="flex-wrap items-end gap-3 mt-8 rounded-lg justify-between flex h-full w-full px-8 text-[var(--white-sb)]">
          <User   
            name="Messi Dios"
            description={(
              <Link href="https://twitter.com/jrgarciadev">
                @jrgarciadev
              </Link>
            )}
            avatarProps={{
              src: "https://img.asmedia.epimg.net/resizer/r7wzvZuGbik3OhxOHJJ9cbelGyk=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YUQF2BM33JCLZBLEUAKAEADAZ4.jpg"
            }}
          />
          <Dropdown classNames={{base: ["bg-[var(--hover-black-sb)]"]}} placement="top-start" backdrop="opaque">
            <DropdownTrigger>
              <Button 
                variant="solid"
                className="bg-[var(--yellow-sb)] text-white opacity-80 hover:opacity-100"
                isIconOnly
              >
                <BsGearFill/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="profile">My Profile</DropdownItem>
              <DropdownItem key="signout" className="text-white">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}


export default SideBar