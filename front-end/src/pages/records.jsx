import { Header } from "@/components/layout/AppHeader";
import { RecordMain } from "@/components/layout/RecordMain";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header></Header>
      <RecordMain></RecordMain>
    </div>
  );
}
