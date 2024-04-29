import Image from "next/image";
import { Inter } from "next/font/google";
import { CgProfile } from "react-icons/cg";
import Menu from "./container/menu";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`  max-w-6xl m-auto ${inter.className}`}>
      <div className="w-full bg-slate-200 p-10 rounded-md">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-semibold">
              Logo
            </a>
          </div>
          <div>
            <input
              name="search"
              type="text"
              className="h-[40px] w-[400px] px-2 rounded"
              placeholder="Search... "
            />
          </div>
          <div>
            {/* <CgProfile size={30} className="text-gray-400" /> */}
            <Menu/>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        {/* filter Container */}
        <div className="w-[30%] bg-orange-400 rounded">
          <p className="p-4 font-semibold">Shop by Category</p>
        </div>
        {/* card container */}
        <div className="w-[70%] bg-pink-400  rounded">
          <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-600 p-10  rounded"></div>
              <div className="bg-blue-600 p-10  rounded"></div>
              <div className="bg-blue-600 p-10  rounded"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
