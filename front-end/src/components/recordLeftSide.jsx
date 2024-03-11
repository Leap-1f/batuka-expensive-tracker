export const RightSide = () => {
  return (
    <div className="records py-[24px] px-[16px] flex gap-[24px] flex-col">
      <div>
        <div className="text-xl">Records</div>
        <button className="btn bg-[#0166FF] w-full rounded-[20px] h-fit flex gap-[4px] items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-white">Add</div>
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <div className="flex flex-col gap-[10px]">
          Types
          <div className="flex gap-[10px]">
          <input type="radio" name="radio-1" className="radio" checked />
          <div>All</div>
          </div>
          <div className="flex gap-[10px]">
          <input type="radio" name="radio-1" className="radio" />
          <div>Income</div>
          </div>
          <div className="flex gap-[10px]">
          <input type="radio" name="radio-1" className="radio" />
          <div>Expense</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>Category </div>
          <div className="text-[#1F2937]">Clear</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
