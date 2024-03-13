import { Header } from "@/components/layout/AppHeader";
import { AppMain } from "../components/layout/App.Main";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Header></Header>
      <AppMain></AppMain>
    </div>
  );
}
