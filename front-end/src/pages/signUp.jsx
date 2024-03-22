import { Step2 } from "@/components/Balence";
import { Step3 } from "@/components/Finish";
import { Step1 } from "@/components/Currency";
import { Step0 } from "@/components/SignUp";
import { useState } from "react";
import Stepper from "@/components/Stepper";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [step, setStep] = useState(0);
  const stepArray = 3;
  console.log(username, mail, password);

  const sendData = async () => {
    if (password === repassword) {
      try {
        const data = await fetch("http://localhost:8080/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            mail,
            password,
            userBalance,
          }),
        });
        const s = await data.json();

        console.log(username, mail, password);
        console.log(s);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step == 0 ? (
        <Step0
          nextStep={nextStep}
          setUsername={setUsername}
          setMail={setMail}
          setPassword={setPassword}
          setRepassword={setRepassword}
        ></Step0>
      ) : (
        false
      )}
      <div
        className={`flex flex-col justify-center items-center ${
          0 < step <= 3 ? "gap-[140px] pt-[40px]" : ""
        }`}
      >
        {0 < step < 4 ? (
          <Stepper numberOfSteps={stepArray} currentStep={step}></Stepper>
        ) : (
          false
        )}
        {step === 1 ? (
          <Step1 nextStep={nextStep} backStep={backStep}></Step1>
        ) : (
          false
        )}
        {step === 2 ? (
          <Step2
            nextStep={nextStep}
            backStep={backStep}
            setUserBalance={setUserBalance}
          ></Step2>
        ) : (
          false
        )}
        {step === 3 ? (
          <Step3
            sendData={sendData}
            nextStep={nextStep}
            backStep={backStep}
          ></Step3>
        ) : (
          false
        )}
      </div>
    </div>
  );
}
