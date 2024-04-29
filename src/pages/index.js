import Image from "next/image";
import { Inter } from "next/font/google";
import { CgProfile } from "react-icons/cg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  max-w-6xl m-auto ${inter.className}`}
    >

      <div className="w-full bg-slate-200 p-10 rounded-md"> 
        <div className="flex justify-between items-center">
        <div>
          <a href="#" className="font-semibold">Logo</a>
        </div>
          <div>
              <input name="search" type="text" className="h-[40px] w-[400px] px-2" placeholder="Search... " />
          </div>
          <div>
              <CgProfile size={30} className="text-gray-400"/>
          </div>
        </div>
      </div>
      <div className="flex ">
        {/* filter Container */}
        <div>

        </div>
      </div>

    </main>
  );
}
