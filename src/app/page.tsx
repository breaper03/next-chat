//
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="p-5 bg-slate-900 w-fit">
          <div className="w-full">
            <span>content here</span>
          </div>
        </div>
      </div>
    </>
  )
}
