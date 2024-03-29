import Image from "next/image";
import { Inter } from "next/font/google";
import { LogIn } from "@/pages/logIn";
import { SignUp } from "@/components/SignUp";
import { AccountSec } from "@/components/layout/Account";
import { Currency } from "@/components/Currency";
import { Header } from "@/components/layout/AppHeader";
import { Modal } from "@/components/ModalComponent";
import { AddCategory } from "@/components/AddCategoryModal";
import { AppMain } from "@/components/layout/App.Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Header></Header>
      <AppMain></AppMain>
    </div>
  );
}
