"use client"
import { getCompletion } from "../libs/openai"
import { Button, Input, Spinner } from '@nextui-org/react'
import { useEffect, useState } from "react"
import { HiArrowCircleRight } from "react-icons/hi";
import { BiSolidKeyboard } from "react-icons/bi";
import { ChatRole, History, Message } from "@/common/interfaces/History";
import "./Chat.css"
import Loading from "./Loading";

const Chat = ({chatId}: any) => {

  const [loading, setLoading] = useState(false);

  const [historyList, setHistoryList] = useState<History | any>({})

  useEffect(() => {
    !chatId ? handleGet() : setHistoryList({})
  }, []);

  const menu = [
    {
      title: "Crear nuevo Chat", 
      icon: <BiSolidKeyboard/>
    },
  ]

  const handleGet = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3000/api/history/${chatId}`, {method: "GET"})
      const history = await res.json()
      setHistoryList(history)      
    } catch (error: any) {
      setHistoryList({})
    }
    setLoading(false);
  }

  let prompt = ""

  const handleSubmit =  async (e: any) => {
    e.preventDefault()
    try {
      const res = await getCompletion(prompt)
      const data = await res.json()

      return data      
    } catch (error: any) {
      return error.message
    }
  }

  return (
    <>
      <div className="w-full bg-transparent items-center max-h-full h-[56.9em] mt-3 justify-between flex flex-col-reverse">
        <div className="w-full items-center h-[100%] mb-24 justify-between flex-col overflow-y-scroll">
          {/* chat history */}
          {
            !chatId 
              ? (
                <h1>{chatId}</h1>
              ) : (
                <div key={Math.random()} className="w-full h-full flex items-center justify-center gap-5">
                  {
                    menu.map(item => (
                      <Button key={Math.random()} onClick={() => alert("helloworld")}
                        className="flex flex-col items-center justify-center h-fit border-3 bg-[--hover-black-sb] hover:bg-[--hover-gray-sb] ring-2 ring-[--hover-yellow-sb] hover:cursor-pointer border-transparent py-6 px-3 rounded-lg">
                        <h1 className="font-mono font-semibold flex-nowrap text-lg text-[--yellow-sb]">{item.title}</h1>
                        <span className="text-4xl text-[--yellow-sb]">{item.icon}</span>
                      </Button>
                    ))
                  }
                </div>
              )
          }
          <div className={`flex flex-col px-10 scroll-smooth ${!historyList || !historyList.messages  ? "h-full backdrop-blur-md" : ""}`}>
              
          </div>
        </div>

        {/* chat input */}
        <div className="w-fit h-fit flex items-end justify-center mb-6 fixed py-1">
          <form onSubmitCapture={handleSubmit}  key={Math.random()} className="flex w-1/2 flex-wrap md:flex-nowrap mb-6 md:mb-0 fixed gap-4 text-white justify-center items-center backdrop-blur-xl p-5 rounded-lg">
            <Input
              placeholder="Write a question..."
              onValueChange={(e) => prompt = e }
              isClearable
              isDisabled={loading}
              radius="lg"
              size="lg"
              classNames={{
                input: [
                  "bg-transparent",
                  "font-mono font-medium",
                  "text-[--yellow-sb]",
                  "placeholder:text-[--yellow-sb]",
                ],
                innerWrapper: [
                  "bg-transparent",
                ],
                inputWrapper: [
                  "bg-transparent",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-transparent",
                  "group-data-[focused=true]:bg-transparent",
                  "cursor-text",
                  "border-[--hover-blue-sb] border-2"
                ],
                clearButton: ["text-red-500"],
              }}
              startContent={
                <BiSolidKeyboard className="text-[var(--yellow-sb)] text-2xl pointer-events-none flex-shrink-0" />
              }
            />
            <Button isIconOnly className='bg-[var(--hover-yellow-sb)] hover:bg-[--yellow-sb] flex items-center justify-center backdrop-blur-sm' variant="flat" aria-label="Take a photo" onClick={handleSubmit}>
              <HiArrowCircleRight className="text-white text-3xl"/>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}


export default Chat