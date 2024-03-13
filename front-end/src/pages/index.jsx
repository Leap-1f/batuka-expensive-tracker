import Image from "next/image";
import { Inter } from "next/font/google";
import { LogIn } from "@/components/Log-In";
import { SignUp } from "@/components/SignUp";
import { AccountSec } from "@/components/layout/Account";
import { Currency } from "@/components/Currency";
import { Header } from "@/components/layout/AppHeader";
import { Modal } from "@/components/ModalComponent";
import { AddCategory } from "@/components/AddCategoryModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <SignUp></SignUp>
    </div>
  );
}
