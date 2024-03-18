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
          <div className="flex items-center gap-[40px]">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
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
