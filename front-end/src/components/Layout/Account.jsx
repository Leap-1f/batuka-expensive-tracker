import { useState } from "react";
import { LogIn } from "../Log-In";
import { SignUp } from "../SignUp";

export const AccountSec = () => {
  const [isLogin, setLogin] = useState(true);
  const switchButton = () => {
    setLogin(!isLogin);
  };
  return (
    <div className="flex">
      <div className="w-[50%] h-[100vh] flex justify-center items-center">
        {/* <LogIn LoginComp={(switchLogin, switchButton)}></LogIn> */}
        {isLogin ? (
          <LogIn LoginComp={switchButton}></LogIn>
        ) : (
          <SignUp SignUpComp={switchButton}></SignUp>
        )}
      </div>
      <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
    </div>
  );
};
