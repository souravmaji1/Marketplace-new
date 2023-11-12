import { SpaceShipPurpleShade } from "Assets/images";
import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import React, { useEffect, useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAddress } from "@thirdweb-dev/react";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const [formView, setFormView] = useState("signup");
  const address = useAddress();

  useEffect(() => {
    if (!address) {
      navigate("/connect-wallet");
    }
  }, []);

  return (
    <div className="w-full mb-5 pb-5 h-fit bg-zinc-800 justify-start items-center md:gap-[60px] flex md:flex-row flex-col">
      <div className="w-full md:w-1/2">
        <img className="w-full h-[691px]" src={SpaceShipPurpleShade} />
      </div>

      <div className={`px-[30px] md:px-0 w-full md:w-1/2 h-full`}>
        <div className="w-full h-[891px] py-[100px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
            Create account
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </div>

          {/*  */}

          {formView === "signup" ? <SignUp /> : <SignIn />}

          <div className="w-full text-white text-[16px] font-normal capitalize leading-9">
            {formView === "signup"
              ? "Already have an account."
              : "Don't have an account."}{" "}
            <span
              className="w-full text-purple-500 text-[16px] font-normal capitalize cursor-pointer"
              onClick={() =>
                formView === "signup"
                  ? setFormView("signin")
                  : setFormView("signup")
              }
            >
              {formView === "signup" ? "Sign In" : "Sign Up"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
