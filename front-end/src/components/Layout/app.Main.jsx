import { UserCard } from "../appCard";
import { LastRecords } from "./LastRecords";
import { UserAmount } from "./UserAmount";

export const AppMain = () => {
  return (
    <div className="bg-slate-300 w-full h-full px-[120px] flex flex-col justify-center items-center">
      <div className="container flex  w-full h-[100%] gap-[40px] flex-col py-[32px]">
        <div className="flex gap-[24px]">
          <UserCard></UserCard>
          <UserAmount></UserAmount>
        </div>
        <div className="w-full">
          <LastRecords></LastRecords>
        </div>
      </div>
    </div>
  );
};
