import Image from "next/image";
import { Inter } from "next/font/google";
import { LogIn } from "@/components/Log-In";
import { SignUp } from "@/components/SignUp";
import { AccountSec } from "@/components/Layout/Account";
import { Currency } from "@/components/currency";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Currency></Currency>
    </div>
  );
}
