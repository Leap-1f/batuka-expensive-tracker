import { Header } from "@/components/Layout/appHeader";
import { AppMain } from "../components/Layout/app.Main";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Header></Header>
      <AppMain></AppMain>
    </div>
  );
}
