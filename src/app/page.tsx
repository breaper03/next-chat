//
import Chat from "@/components/Chat";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen max-h-full overflow-hidden">
        <SideBar />
        <div className="p-5 bg-[var(--black-sb)] w-full">
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
