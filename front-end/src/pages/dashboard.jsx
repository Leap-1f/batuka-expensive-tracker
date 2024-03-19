import { Header } from "@/components/layout/AppHeader";
import { AppMain } from "../components/layout/App.Main";
import { Modal } from "@/components/ModalComponent";
import { AddCategory } from "@/components/AddCategoryModal";
import { CategorySelect } from "@/components/CatergorySelect";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <CategorySelect></CategorySelect>
    </div>
  );
}
