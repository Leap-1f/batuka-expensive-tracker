import { Header } from "@/components/layout/AppHeader";
import { AppMain } from "../components/layout/App.Main";
import { Modal } from "@/components/ModalComponent";
import { AddCategory } from "@/components/AddCategoryModal";
import { CategorySelect } from "@/components/CatergorySelect";
import { Currency } from "@/components/Currency";
import { Ballet } from "next/font/google";
import { BalanceSec } from "@/components/Balence";
import { FinishSec } from "@/components/Finish";

export default function Dashboard() {
  return (
    <div className="">
      <FinishSec></FinishSec>
    </div>
  );
}
