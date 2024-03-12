import { useState } from "react";
export const Modal = () => {
  const [typeChange, setTypeChange] = useState(true);
  const clickChange = () => {
    setTypeChange(!typeChange);
  };
  return (
    <div className="flex flex-col rounded-[10px] bg-white w-[792px] px-[24px] py-[24px] ">
      <div className="flex justify-between py-[10px] px-[8px] ">
        <div className="text-xl">Add Record</div>
        <div className="2xl">X</div>
      </div>
      <div className="flex justify-center items-center border-t-[1px]">
        <div className="flex py-[10px] px-[24px]  flex-col w-[50%]  gap-[24px]">
          <div className=" flex flex-col gap-[20px] w-full">
            <div className="flex rounded-[8px] justify-between w-full bg-[#F3F4F6]  ">
              <div className="bg-[#0166FF] rounded-[10px] w-[50%] text-center">
                Expense
              </div>
              <div className="rounded-[10px] w-[50%] text-center">income</div>
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
              <div>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
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
              <button className="btn bg-[#0166FF] text-white w-full rounded-[24px] ">
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
