import { BarChart, DoughnutChart } from "../Chart";
import { UserCard } from "../appCard";
import { LastRecords } from "./LastRecords";
import { UserAmount } from "./UserAmount";

export const AppMain = () => {
  return (
    <div className="bg-slate-300 w-full h-full px-[120px] flex flex-col justify-center items-center">
      <div className="container flex  w-full h-[100%] gap-[40px] flex-col py-[32px]">
        <div className="flex gap-[100px] ">
          <UserCard></UserCard>
          <UserAmount></UserAmount>
        </div>
        <div className="w-full flex flex-col gap-[30px] ">
          <div className="flex w-fill gap-[80px]">
            <div className="w-[50%] bg-white rounded-[10px]  py-[20px] pl-[30px]">
              <BarChart className={`bg-white`}></BarChart>
            </div>
            <div className="w-[50%] bg-white pl-[30px] rounded-[10px]">
              <DoughnutChart></DoughnutChart>
            </div>
          </div>
          <LastRecords></LastRecords>
        </div>
      </div>
    </div>
  );
};
