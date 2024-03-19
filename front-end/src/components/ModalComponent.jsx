import { useState } from "react";
import { HomeSvg } from "../../public/HomeSvg";
export const Modal = ({ hidden }) => {
  const [changeType, setChangeType] = useState(true);
  const [categorySelect, setCategorySelect] = useState(false);
  const openCategirySelect = () => {
    setCategorySelect(!categorySelect);
  };
  const expenceType = () => {
    setChangeType(false);
  };
  const incomeType = () => {
    setChangeType(true);
  };
  return (
    <div className="flex flex-col rounded-[24px] bg-white w-[792px] px-[24px] py-[24px] sticky z-[3]   ">
      <div className="flex justify-between py-[10px] px-[8px] ">
        <div className="text-xl">Add Record</div>
        <button onClick={hidden} className="3xl">
          X
        </button>
      </div>
      <div className="flex justify-center items-center border-t-[1px]">
        <div className="flex py-[10px] px-[24px]  flex-col w-[50%]  gap-[24px]">
          <div className=" flex flex-col gap-[20px] w-full">
            <div className="flex rounded-[24px] justify-between w-full bg-[#F3F4F6]  ">
              <button
                onClick={expenceType}
                className={`${
                  changeType ? "" : "bg-[#0166FF] text-white"
                } h-[40px] rounded-[24px] w-[50%] text-center `}
              >
                Expense
              </button>
              <button
                onClick={incomeType}
                className={`rounded-[24px] w-[50%]  text-center h-[40px] ${
                  changeType ? "bg-[#16A34A] text-white" : ""
                }`}
              >
                income
              </button>
            </div>
          </div>
          <div className="flex bg-[#F3F4F6] flex-col px-[16px] py-[12px] rounded-[16px]">
            <div>Amount</div>
            <input
              className="bg-[#F3F4F6]"
              type="number"
              placeholder="T 00.00"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <div>Category</div>
              <div></div>
            </div>
            <div className="flex gap-[60px]">
              <div className="flex flex-col gap-[10px]">
                <div>Date</div>
                <input
                  className="bg-[#D1D5DB] flex py-[10px] px-[10px] rounded-[10px]"
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <div>Time</div>
                <input
                  className="bg-[#D1D5DB] flex py-[10px] px-[10px] rounded-[10px]"
                  type="time"
                />
              </div>
            </div>
            <div>
              <button
                className={`btn ${
                  changeType ? "bg-[#16A34A]" : "bg-[#0166FF]"
                } text-white w-full rounded-[24px]`}
              >
                Add Record
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] py-[24px] px-[24px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <div>Payee</div>
            <input
              type="text"
              placeholder="write here"
              className="input  input-bordered input-sm h-[50px] w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col gap-[10px] h-full">
            <div>Note</div>
            <input
              type="text"
              placeholder="write here"
              className="input flex items-start input-bordered input-lg w-full h-[225px]   max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
