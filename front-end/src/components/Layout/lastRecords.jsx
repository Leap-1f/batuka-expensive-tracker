export const LastRecords = () => {
  return (
    <div className="flex flex-col rounded-[16px] bg-white w-full">
      <div className="flex px-[24px] py-[16px] ">
        <div>Last Record</div>
      </div>
      <div className="px-[24px] flex flex-col border-solid border-t-[1px] py-[20px] ">
        <div className="flex  justify-between">
          <div className="flex gap-[8px] justify-between ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle cx="20" cy="20" r="20" fill="#0166FF" />
              </svg>
            </div>
            <div className="flex flex-col  justify-start">
              <div>Lending & Renting</div>
              <div className="text-[#6B7280] text-sm ">3 hours ago</div>
            </div>
          </div>
          <div className="text-[#84CC16] flex items-center">-1000</div>
        </div>
      </div>
    </div>
  );
};
