import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaIdCardAlt } from "react-icons/fa";

export const AddCategory = () => {
  const [hidden, setHidden] = useState(false);
  const hiddenModal = () => {
    setHidden(!hidden);
  };
  return (
    <div className="w-[494px] rounded-[10px] bg-white">
      <div className="flex justify-between px-[24px] py-[20px] border-b-[1px] border-solid">
        <div className="text-xl">Add Category</div>
        <div className="text-2xl">X</div>
      </div>
      <div className="px-[24px] py-[24px] flex w-[full] ">
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex gap-[40px]">
            <button
              onClick={hiddenModal}
              className="rounded-[8px] w-[150px]   relative flex justify-center items-center border-solid border-[1px] "
            >
              <div className="flex justify-center items-center gap-[4px] px-[8px] py-[4px]">
                <IoHomeSharp className="w-[24px] h-[24px]" />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z"
                      fill="#1F2937"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`absolute w-[312px] h-fit gap-[20px] py-[24px] px-[24px]   ${
                  hidden ? "flex" : "hidden"
                } left-[15px] bg-gray-300 px-[4px] py-[4px] rounded-[8px] top-[40px]`}
              >
                <IoHomeSharp className="w-[24px] h-[24px]" />
                <IoHome className="w-[24px] h-[24px]" />
                <FaAddressCard className="w-[24px] h-[24px]" />
                <FaIdCardAlt className="w-[24px] h-[24px]" />
              </div>
            </button>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered w-full  max-w-xs"
            />
          </div>
          <button className="flex h-[40px] px-[12px] py-[12px] items-center justify-center rounded-[20px] bg-[#16A34A] text-white w-full">
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};
