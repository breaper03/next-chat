"use client"
import { getCompletion } from "../libs/openai"
import { Button, Input } from '@nextui-org/react'
import { useState } from "react"
import { HiArrowCircleRight } from "react-icons/hi";
import { BiSolidKeyboard } from "react-icons/bi";

const Chat = () => {

  const [prompt, setPrompt] = useState("")

  const history = [
    {
      id: "1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "user"
    },
    {
      id: "2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "api"
    },
    {
      id: "3",
      text: "hello world in python",
      from: "user"
    },
    {
      id: "4",
      text: "print('hello world')",
      from: "api"
    },
    {
      id: "5",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "user"
    },
    {
      id: "6",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi quos nihil incidunt nemo fugit.",
      from: "api"
    },
    {
      id: "7",
      text: "hello world in python",
      from: "user"
    },
    {
      id: "8",
      text: "print('hello world')",
      from: "api"
    },
  ]

  const handleOnChange = (e: any) => {
    e.preventDefault()
    const value = e.target.value
    console.log("process.env.OPENAI_KEY", process.env.DATABASE_URL)
    console.log(value)
    setPrompt(value)
  }

  const handleSubmit =  async (e: any) => {
    e.preventDefault()
    console.log(process.env.OPENAI_KEY)
    await getCompletion(prompt)
  }

  return (
    <>
      <div className="w-full items-center max-h-full h-[54.9em] justify-center flex flex-col">
        <div className="w-full items-center h-[85%] justify-between flex-col overflow-y-scroll">
          {/* chat history */}
          <div className="flex flex-col p-5 scroll-smooth">
            {
              history.map(item => (
                <div key={item.id} className={`flex flex-col items-start ${item.from === "user" ? "items-end" : "items-start"}`}>
                  {
                    item.from === "user" ? (
                      <>
                        <div className="bg-gray-800 float-right p-5 max-w-2xl rounded-lg mb-7">
                          <div className="font-semibold uppercase mb-2 border-b-2 border-white w-fit">
                            <h1>{`> ${item.from}:`}</h1>
                          </div>
                          <div className="text-gray-300">
                            <span>
                              {item.text}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-emerald-600 backdrop-blur-sm float-right p-5 max-w-2xl rounded-lg mb-7">
                          <div className="font-semibold text-white uppercase mb-2 border-b-2 border-white w-fit">
                            <h1>{`> ${item.from}:`}</h1>
                          </div>
                          <div className="text-gray-0">
                            <span>
                              {item.text}
                            </span>
                          </div>
                        </div>
                      </>
                    )
                  }
                </div>
              ))
            }
          </div>
        </div>
        {/* chat input */}
        <div className="w-full h-[15%] items-end justify-center flex py-3">
          <form onSubmitCapture={handleSubmit}  key={Math.random()} className="flex w-1/2 flex-wrap md:flex-nowrap mb-6 md:mb-0 absolute gap-4 text-white justify-center items-center backdrop-blur-sm bg-[#33415571] p-5 rounded-lg">
            <Input
              label="Write a question..."
              isClearable
              autoFocus
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "font-semibold",
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
              placeholder="Type to ask..."
              startContent={
                <BiSolidKeyboard className="text-emerald-500 dark:text-white/90 text-2xl  pointer-events-none flex-shrink-0" />
              }
            />
            <Button isIconOnly className='bg-emerald-500 hover:bg-[#10b9818a] flex items-center justify-center backdrop-blur-sm' variant="flat" aria-label="Take a photo" onClick={handleSubmit}>
              <HiArrowCircleRight className="text-white text-3xl"/>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}


export default Chat