"use client"
import { getCompletion } from "../libs/openai"
import { Button, Input } from '@nextui-org/react'
import { useState } from "react"
import { BsChevronDoubleRight } from 'react-icons/bs'

const Chat = () => {

  const [prompt, setPrompt] = useState("")

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
      <div className="w-full items-center justify-center flex bg-[#1e293b]">
        <form onSubmitCapture={handleSubmit}  key={Math.random()} className="flex w-1/2 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 text-white justify-center items-center bg-slate-700 p-5 rounded-lg">
            <Input value={prompt}  maxLength={30} variant={"flat"} size='sm' label="Prompt:" placeholder="Enter your Prompt..."  onChange={(e) => handleOnChange(e)} autoFocus isRequired={true} isClearable={false}
              classNames={{
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "font-semibold",
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
                label: [
                  "font-semibold", "text-indigo-500"
                ]
              }}
            /> 
            <Button isIconOnly className='bg-indigo-500' variant="flat" aria-label="Take a photo" onClick={handleSubmit}>
              <BsChevronDoubleRight />
            </Button>
        </form>
      </div>
    </>
  )
}

export default Chat