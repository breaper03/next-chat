//
import Chat from "../components/Chat";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="p-5 bg-slate-900 w-full">
          <div className="w-full">
            <div className="">
              
            </div>
            <div className="">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
