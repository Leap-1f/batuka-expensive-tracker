import { BalanceSec } from "@/components/Balence";
import { FinishSec } from "@/components/Finish";
import { Currency } from "@/components/Currency";
import { Logo } from "../../public/Logo";
import { Geld } from "../../public/Geld";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center gap-[200px] py-[50px]">
      <div className="flex flex-col gap-[48px] justify-center items-center">
        <div className="flex gap-[4px] justify-center items-center">
          <Logo></Logo>
          <Geld></Geld>
        </div>
        <div>
          <ul className="steps *:text-sm  ">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div>
        <Currency></Currency>
      </div>
      <div></div>
    </div>
  );
}
