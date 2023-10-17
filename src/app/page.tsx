"use server"

import SideBar2 from "@/components/SideBar2";
import Chat from "../components/Chat";

let history: History[] = []

export default async function Home() {
  const getHistory = async () => {
    const res = await fetch("http://localhost:3000/api/history");
    history = await res.json()
  }

  return (
    <>
      <div className="dark flex w-full h-screen max-h-full overflow-hidden">
          {/* <SideBar2 getHistory={getHistory} history={history}/> */}
          <SideBar2 />
          <div className="p-1 bg-[var(--black-sb)] w-full">
            <div className="w-full h-full">
              <div className="w-full h-full">
                <Chat />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
