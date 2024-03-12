import { LeftSide } from "../RecordLeftSide";
import { RighSide } from "../RecordRightSide";

export const RecordMain = () => {
  return (
    <div className="bg-[#F3F4F6] w-full h-full px-[120px] ">
      <div className="container flex py-[30px]  gap-[50px] w-full   ">
        <LeftSide></LeftSide>
        <RighSide></RighSide>
      </div>
    </div>
  );
};
