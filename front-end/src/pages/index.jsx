import Image from "next/image";
import { Inter } from "next/font/google";
import { LogIn } from "@/components/Log-In";
import { SignUp } from "@/components/SignUp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[50%] h-[100vh] flex justify-center items-center">
        <SignUp></SignUp>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#0166FF]">asdas</div>
    </div>
  );
}
