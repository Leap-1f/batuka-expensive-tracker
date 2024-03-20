import { BalanceSec } from "@/components/Balence";
import { FinishSec } from "@/components/Finish";
import { Currency } from "@/components/Currency";
import { Logo } from "../../public/Logo";
import { Geld } from "../../public/Geld";
import { Step0 } from "@/components/SignUp";
import { useState } from "react";

export default function SignUp() {
  const [step, setStep] = useState(0);
  const stepArray = 3;
  return (
    <div className="">
      <Step0></Step0>
    </div>
  );
}
