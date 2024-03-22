import { Geld } from "../../public/Geld";
import { Logo } from "../../public/Logo";

export default function Stepper({ currentStep, numberOfSteps }) {
  let mockArray = [1, 2, 3];
  let number = 1;

  return (
    <div className="w-[240px] flex flex-col gap-[40px]">
      <div className="flex gap-[16px] items-center justify-center">
        <Logo></Logo>
        <Geld></Geld>
      </div>
      <div>
        <div className="flex items-center">
          {mockArray.map((el, index) => (
            <>
              <div
                className={`w-[35px] h-[30px] flex items-center justify-center rounded-[50%] text-white ${
                  number <= currentStep ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                {number++}
              </div>
              {index < numberOfSteps - 1 && (
                <div
                  className={`w-[100px] h-1 rounded-full ${
                    number <= currentStep ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>
        <div className="flex justify-between -ml-[15px]">
          <p>Currency</p>
          <p>Balance</p>
          <p>Finish</p>
        </div>
      </div>
    </div>
  );
}
