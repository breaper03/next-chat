"use client"

import {BsBookHalf, BsBookmarkHeart, BsGearFill, BsPlus, BsFolder, BsTrash3Fill, BsBookmarkHeartFill} from "react-icons/bs"

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Tooltip, User } from "@nextui-org/react"
import Link from "next/link"
import { BiStar, BiSolidStar, BiSolidPencil, BiSolidTrashAlt } from "react-icons/bi" 
import { RiChat4Line, RiHistoryLine, RiRobot2Line, RiSearchLine } from "react-icons/ri" 
import { BiSolidKeyboard } from "react-icons/bi";
import { PiChatDotsBold } from "react-icons/pi";



const menu = [
  {
    title: "Favorites",
    icon: <BiStar className="text-2xl"/>,
    type: "link"
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

const SideBar2 = () => {
  return (
    <>
      {/* box */}
      <div className="flex flex-col items-center justify-start h-full max-w-[350px] w-[325px] py-5 bg-[var(--hover-black-sb)] px-2">
        {/* LOGO TITLE */}
        <Link href="/" className="flex-wrap items-center mt-2 rounded-lg justify-center flex w-fit px-8 font-semibold text-[var(--white-sb)]">
          <BiSolidKeyboard className="text-4xl"/>
          <span className="text-transparent">"</span>
          <h1 className="text-2xl text-[var(--yellow-sb)] font-mono">WorkType</h1>
        </Link>
        <div className="w-full h-full mt-4 overflow-y-scroll scroll-smooth">
          <div className="h-full flex-col">

            {
              history.map(item => (
                <Link href="/" className="flex flex-wrap items-center justify-around mx-1 mb-3 px-2 py-2 transition delay-75 hover:text-[var(--yellow-sb)] hover:bg-[var(--hover-blue-sb)] active:bg-[var(--hover-blue-sb)] rounded-lg">
                  <div className="flex flex-nowrap w-[70%] max-w-[70%] items-center gap-2 font-semibold text-xl overflow-hidden">
                    <PiChatDotsBold className="text-xl"/>
                    <h3 className="flex whitespace-pre overflow-ellipsis text-base font-mono font-normal max-w-32 min-w-32 items-center  h-10 overflow-hidden">{item.title}</h3>
                  </div>
                  <div className="flex items-center w-[25%] max-w-[25%] gap-1">
                    <button className="hover:text-[var(--yellow-sb)] text-[var(--white-sb)] p-[0.35rem] rounded-lg"><BiSolidPencil/></button>
                    <button className="hover:text-[var(--yellow-sb)] text-[var(--white-sb)] p-[0.35rem] rounded-lg"><BiSolidTrashAlt/></button>
                  </div>
                </Link>
              ))
            }

          </div>
        </div>
        <div className="flex-wrap items-end gap-3 mt-4 rounded-lg justify-between flex h-fit w-full px-3 text-[var(--white-sb)]">
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


export default SideBar2