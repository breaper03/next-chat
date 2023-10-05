"use client"
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";

import { Key, useState } from "react";

const LoginForm = () => {
  const [selected, setSelected] = useState("login");

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-full h-full min-h-[25.5em] max-h-[25.5em] bg-[var(--black-sb)] text-gray-500">
        <CardBody className="overflow-hidden bg-[var(--black-sb)]">
          <Tabs
            fullWidth
            size="lg"
            classNames={{cursor: ["bg-[var(--yellow-sb)]", "text-white"], tabList: ["bg-gray-800"]}}
            aria-label="Tabs form"
            selectedKey={selected}
            variant="light"
            onSelectionChange={(key) => setSelected(key.toString())}
          >
            <Tab key="login" title={<h1 className="text-white text-sm">Login</h1>} className="bg-transparent">
              <form className="flex flex-col gap-4 bg-[var(--black-sb)]">
                <Input 
                  isRequired label="Email" 
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
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
                />
                <Input
                  isRequired
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
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
                  label="Password"                  
                  type="password"
                />
                <p className="text-center text-small mt-[4.5rem]">
                  Need to create an account?{" "}
                  <Link href={"/"} size="sm" onPress={() => setSelected("signup")} className="text-[var(--yellow-sb)]">
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth className="bg-[var(--yellow-sb)] text-gray-500 opacity-75 hover:opacity-100">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="signup" title={<h1 className="text-white text-sm">Sign up</h1>}>
              <form className="flex flex-col gap-4 bg-[var(--black-sb)]">
                <div className="flex flex-nowwrap gap-2 items-center justify-center w-full">
                  <Input 
                    isRequired label="Name" type="text" 
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
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
                  />
                  <Input
                    isRequired label="Last name" type="text"
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
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
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-4">
                  <Input 
                    isRequired label="Email" type="email" 
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
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
                  />
                  <Input
                    isRequired label="Password" type="password"
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
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
                  />
                </div>
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link href={"/"} size="sm" onPress={() => setSelected("login")} className="text-[var(--yellow-sb)]">
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth className="bg-[var(--yellow-sb)] text-white opacity-75 hover:opacity-100">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}


export default LoginForm