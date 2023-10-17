"use client"

import { Button, Link as LinkUI , Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Tabs, Tooltip, User, useDisclosure } from "@nextui-org/react"
import Link from "next/link"
import { BiSolidPencil, BiSolidTrashAlt, BiSolidUserCircle } from "react-icons/bi" 
import { RiChatNewFill } from "react-icons/ri" 
import { BiSolidKeyboard } from "react-icons/bi";
import { PiChatDotsBold } from "react-icons/pi";
import { useEffect, useState } from "react"
import { IUser } from "@/common/interfaces/User"
import { randomUUID } from "crypto"
import { nanoid } from 'nanoid'
import { BsGearFill } from "react-icons/bs"

const SideBar2 = () => {

  const [currentUser, setCurrentUser] = useState<IUser | undefined>()
  
  const [signOnChange, setSignOnChange] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    token: "",
    password: ""
  });

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [selected, setSelected] = useState("login");

  const [historyList, setHistoryList] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleGet()
  }, [])  

  const handleAutoLogin = async () => {
    const token = localStorage.getItem("item")
    if (token !== token) {
      const res = await fetch(`http://localhost:3000/api/users`, {method: "PUT", body: token}).then(async (data: any) => await data.json())
      setCurrentUser(res)
    } else {
      console.log("No hay usuario actual")
    }
  }

  const handleGet = async () => {
    setLoading(true)
    const res = await fetch(`http://localhost:3000/api/history`, {method: "GET"})
    const history = await res.json()
    setHistoryList(history)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    setLoading(true);
    await fetch(`http://localhost:3000/api/history/${id}`, {method: "DELETE"}).then(async (data: any) => await data.json())
    await handleGet()
    setLoading(false);
  }

  const handleSignUp = async () => {
    setLoading(true);
    const token = nanoid()
    localStorage.setItem("token", token)
    const newUser: IUser = {
      ...signOnChange,
      token: token
    }
    console.log("newUser", newUser)
    try {
      console.log(signOnChange)
      await fetch(
        `http://localhost:3000/api/users`, 
        {
          method: "POST", body: JSON.stringify(newUser), 
          headers: {"Content-Type": "application/json"}
        }).then(async (data) => await data.json())
        setLoading(false)
    } catch (error: any) {
      setLoading(false)
      return error.message
    }
  }

  const changeSignUp = (event: any) => {
    setSignOnChange({
      ...signOnChange,
      [event.target.name]: event.target.value,
    })
  }
  
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [openModal, setOpenModal] = useState(false)

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

          <div className="flex flex-nowrap gap-2 w-full h-fit mt-4 px-3 mb-4">
            <Tooltip content="Agregar" className="text-[--hover-yellow-sb] text-xs bg-[--hover-blue-sb] p-2">
              <Button variant="flat" isIconOnly size="md" className="bg-[--hover-blue-sb] hover:text-[--yellow-sb] text-xl"><RiChatNewFill/></Button>
            </Tooltip>
            <Input type="text" size="md" isClearable isDisabled={loading}
              classNames={{
                label: ["text-[--white-sb]"],
                input: [
                  "font-mono font-medium",
                  "text-[--yellow-sb]",
                  "placeholder:text-[--yellow-sb]",
                ],
                innerWrapper: [
                  "bg-transparent",
                  
                ],
                inputWrapper: [
                  "bg-[--hover-black-sb]",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-[--hover-black-sb]",
                  "group-data-[focused=true]:bg-[--hover-black-sb]",
                  "cursor-text",
                  "border-[--hover-blue-sb] border-2"
                ],
                clearButton: ["text-red-500"],
              }}
            />
          </div>

          <div className="h-full flex-col">


            {
              historyList !== undefined && loading === false
              ? (
                  historyList.map((item: any) => (
                    <div key={Math.random()} className="flex flex-wrap items-center justify-around mx-1 mb-3 px-2 py-2 transition delay-75 hover:text-[var(--yellow-sb)] hover:bg-[var(--hover-blue-sb)] active:bg-[var(--hover-blue-sb)] rounded-lg">
                      <Link href={`/api/${item.id}`} className="flex flex-nowrap w-[70%] max-w-[70%] items-center gap-2 font-semibold text-xl overflow-hidden">
                        <PiChatDotsBold className="text-xl"/>
                        <h3 className="flex whitespace-pre overflow-ellipsis text-base font-mono font-normal max-w-32 min-w-32 items-center  h-10 overflow-hidden">{item.title}</h3>
                      </Link>
                      <div className="flex items-center w-[25%] max-w-[25%] gap-1">
                        <button className="hover:text-[var(--yellow-sb)] text-[var(--white-sb)] p-[0.35rem] rounded-lg"><BiSolidPencil/></button>
                        <button className="hover:text-[var(--yellow-sb)] text-[var(--white-sb)] p-[0.35rem] rounded-lg" onClick={() => handleDelete(item.id)}><BiSolidTrashAlt/></button>
                      </div>
                    </div>
                  ))              
                )
                : (
                  <div className="flex flex-wrap justify-center items-center h-full w-full">
                    <div className="loader"></div>
                  </div>
                )
            }

          </div>
        </div>
        <div className={`flex-wrap items-end gap-3 mt-4 rounded-lg ${currentUser ? "justify-between" : "justify-center"} flex h-fit w-full px-3 text-[var(--white-sb)]`}>
          {
            currentUser 
              ? (
                <>
                  <User   
                    name="Messi Dios"
                    description={(
                      <Link href="https://twitter.com/jrgarciadev">
                        @{currentUser.email}
                      </Link>
                    )}
                    avatarProps={{
                      src: "https://img.asmedia.epimg.net/resizer/r7wzvZuGbik3OhxOHJJ9cbelGyk=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YUQF2BM33JCLZBLEUAKAEADAZ4.jpg"
                    }}
                  />
                  <Dropdown classNames={{base: ["bg-[var(--hover-black-sb)]"]}} placement="top-start" backdrop="transparent">
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
                        Sign out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <Button onClick={onOpen} variant="flat" size="md" className="bg-[--hover-blue-sb] hover:text-[--yellow-sb] text-2xl">
                    <BiSolidUserCircle/> <span className="text-base font-mono">Login / Sign in</span>
                  </Button>
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl" className="dark flex bg-[--black-sb] justify-between" backdrop="blur">
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1 bg-[--black-sb]"></ModalHeader>
                          <ModalBody className="bg-[--black-sb]">
                            <div className="flex items-center justify-center w-full ">
                              <div className="max-w-full w-full h-full min-h-[25.5em] max-h-[25.5em] bg-[var(--black-sb)] text-gray-500">
                                <div className="overflow-hidden bg-[var(--black-sb)]">
                                  <Tabs
                                    fullWidth
                                    size="lg"
                                    classNames={{
                                      cursor: "bg-[--yellow-sb]",
                                    }}
                                    color="warning"
                                    aria-label="Tabs form"
                                    selectedKey={selected}
                                    variant={"solid"}
                                    
                                    onSelectionChange={(key) => setSelected(key.toString())}
                                  >
                                    <Tab key="login" title={<h1 className="text-white text-sm">Login</h1>} className="bg-[transparent]">
                                      <form className="flex flex-col gap-4 ">
                                        <Input 
                                          isRequired label="Email" name="email"
                                          classNames={{
                                            label: ["text-[--white-sb]"],
                                              input: [
                                                "font-mono font-medium",
                                                "text-[--yellow-sb]",
                                                "placeholder:text-[--yellow-sb]",
                                              ],
                                              innerWrapper: [
                                                "bg-transparent",
                                                
                                              ],
                                              inputWrapper: [
                                                "bg-[--hover-black-sb]",
                                                "backdrop-blur-xl",
                                                "backdrop-saturate-200",
                                                "hover:bg-[--hover-black-sb]",
                                                "group-data-[focused=true]:bg-[--hover-black-sb]",
                                                "cursor-text",
                                                "border-[--hover-blue-sb] border-2"
                                              ],
                                              clearButton: ["text-red-500"],
                                            }}
                                        />
                                        <Input
                                          isRequired name="password"
                                          classNames={{
                                            label: ["text-[--white-sb]"],
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
                                                "bg-[--hover-black-sb]",
                                                "backdrop-blur-xl",
                                                "backdrop-saturate-200",
                                                "hover:bg-[--hover-black-sb]",
                                                "group-data-[focused=true]:bg-[--hover-black-sb]",
                                                "cursor-text",
                                                "border-[--hover-blue-sb] border-2"
                                              ],
                                              clearButton: ["text-red-500"],
                                            }}
                                          label="Password"                  
                                          type="password"
                                        />
                                        <p className="text-center text-small mt-[4.5rem]">
                                          Need to create an account?{" "}
                                          <LinkUI href={"/"} size="sm" onPress={() => setSelected("signup")} className="text-[var(--yellow-sb)]">
                                            Sign up
                                          </LinkUI>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                          <Button 
                                            fullWidth 
                                            className="bg-[var(--yellow-sb)] text-gray-100 opacity-75 hover:opacity-100" >
                                            Login
                                          </Button>
                                        </div>
                                      </form>
                                    </Tab>
                                    <Tab key="signup" title={<h1 className="text-white text-sm">Sign up</h1>}>
                                      <form className="flex flex-col gap-4 bg-[var(--black-sb)]">
                                        <div className="flex flex-nowwrap gap-2 items-center justify-center w-full">
                                          <Input 
                                            isRequired label="Name" name="firstname" onChange={changeSignUp} type="text" 
                                            classNames={{
                                              label: ["text-[--white-sb]"],
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
                                                "bg-[--hover-black-sb]",
                                                "backdrop-blur-xl",
                                                "backdrop-saturate-200",
                                                "hover:bg-[--hover-black-sb]",
                                                "group-data-[focused=true]:bg-[--hover-black-sb]",
                                                "cursor-text",
                                                "border-[--hover-blue-sb] border-2"
                                              ],
                                              clearButton: ["text-red-500"],
                                            }}
                                          />
                                          <Input
                                            isRequired label="Lastname" name="lastname" onChange={changeSignUp} type="text"
                                            classNames={{
                                              label: ["text-[--white-sb]"],
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
                                                "bg-[--hover-black-sb]",
                                                "backdrop-blur-xl",
                                                "backdrop-saturate-200",
                                                "hover:bg-[--hover-black-sb]",
                                                "group-data-[focused=true]:bg-[--hover-black-sb]",
                                                "cursor-text",
                                                "border-[--hover-blue-sb] border-2"
                                              ],
                                              clearButton: ["text-red-500"],
                                            }}
                                          />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-center w-full gap-4">
                                          <Input 
                                            isRequired label="Email" name="email" onChange={changeSignUp} type="email" 
                                            classNames={{
                                              label: ["text-[--white-sb]"],
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
                                                "bg-[--hover-black-sb]",
                                                "backdrop-blur-xl",
                                                "backdrop-saturate-200",
                                                "hover:bg-[--hover-black-sb]",
                                                "group-data-[focused=true]:bg-[--hover-black-sb]",
                                                "cursor-text",
                                                "border-[--hover-blue-sb] border-2"
                                              ],
                                              clearButton: ["text-red-500"],
                                            }}
                                          />
                                          <Input
                                            isRequired label="Password" name="password" onChange={changeSignUp} type="password"
                                            classNames={{
                                              label: ["text-[--white-sb]"],
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
                                                "bg-[--hover-black-sb]",
                                                "backdrop-blur-xl",
                                                "backdrop-saturate-200",
                                                "hover:bg-[--hover-black-sb]",
                                                "group-data-[focused=true]:bg-[--hover-black-sb]",
                                                "cursor-text",
                                                "border-[--hover-blue-sb] border-2"
                                              ],
                                              clearButton: ["text-red-500"],
                                            }}
                                          />
                                        </div>
                                        <p className="text-center text-small">
                                          Already have an account?{" "}
                                          <LinkUI href={"/"} size="sm" onPress={() => setSelected("login")} className="text-[var(--yellow-sb)]">
                                            Login
                                          </LinkUI>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                          <Button
                                            onPress={handleSignUp} 
                                            fullWidth 
                                            className="bg-[var(--yellow-sb)] text-white opacity-75 hover:opacity-100">
                                            Sign up
                                          </Button>
                                        </div>
                                      </form>
                                    </Tab>
                                  </Tabs>
                                </div>
                              </div>
                            </div>
                          </ModalBody>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </>
              )
          }
          
        </div>
      </div>
    </>
  )
}


export default SideBar2