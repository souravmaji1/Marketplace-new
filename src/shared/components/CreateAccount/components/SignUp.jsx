import { useAddress } from "@thirdweb-dev/react";
import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import Spinner from "Components/Spinner/Spinner";
import ErrorIcon from "Root/assets/toasts/ErrorIcon";
import SuccesIcon from "Root/assets/toasts/succesIcon";
import { BASE_URL, ERROR_ICON, SUCCESS_ICON } from "Root/constants";
import { setIsILoggedIn, setUser } from "Root/redux/slices/appSlice";
import { setToastData } from "Root/redux/slices/uiSlice";
import fetchWrapper from "Root/utils/fetchWrapper";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const initialData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const address = useAddress();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const { username, email, password, confirmPassword } = formData;
  const [passwordError, setPasswordError] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value });
    if (confirmPassword === password) setPasswordMismatchError("");
    if (password.length >= 8) setPasswordError("");
    if (key === "password") {
      value.length < 8 &&
        setPasswordError("Password length should be atleast 8!");
    }
    if (key === "confirmPassword") {
      console.log("password !== value", password, value, password !== value);
      if (password !== value) {
        setPasswordMismatchError("Password did not matched!");
      } else {
        setPasswordMismatchError("");
      }
    }
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      let signupPayload = {
        address,
        name: username,
        email,
        password,
      };
      let { payload } = await fetchWrapper(
        `${BASE_URL}auth/signup`,
        signupPayload,
        "post"
      );
      setLoading(false);
      if (payload?.email) {
        dispatch(
          setUser({
            profile: {
              email: payload?.email,
              name: payload?.name,
              collections: payload?.collections,
              nfts: payload?.nfts,
            },
          })
        );
        window.localStorage.setItem("accessToken", payload?.accessToken);
        dispatch(setIsILoggedIn(true));
        dispatch(
          setToastData({
            icon: SUCCESS_ICON,
            toastMessage: "Account created successfully!",
            openToast: true,
          })
        );

        setTimeout(() => {
          dispatch(
            setToastData({
              icon: SUCCESS_ICON,
              toastMessage: "Account created successfully!",
              openToast: false,
            })
          );
        }, 3000);

        navigate("/");
      } else {
        dispatch(
          setToastData({
            icon: ERROR_ICON,
            toastMessage: payload?.message,
            openToast: true,
          })
        );

        setTimeout(() => {
          dispatch(
            setToastData({
              icon: SUCCESS_ICON,
              toastMessage: "",
              openToast: false,
            })
          );
        }, 3000);
      }
    } catch (e) {
      setLoading(false);
      console.log("error on submit", e);
    }
  };

  console.log("formData", formData, address);

  return (
    <form className="w-full h-fit flex-col justify-center gap-5 items-start inline-flex">
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <Input
          placeholder={"Username"}
          value={username}
          onChange={(val) => handleChange(val, "username")}
          icon={<UserIcon pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px] mb-4">
        <Input
          placeholder={"Email Address"}
          type="email"
          value={email}
          onChange={(val) => handleChange(val, "email")}
          icon={<EnvelopeSimple pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px] mb-4">
        <Input
          placeholder={"Password"}
          type="password"
          value={password}
          onChange={(val) => handleChange(val, "password")}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
        {passwordError && (
          <span className="w-full text-red-500 text-[12px] font-normal capitalize leading-9">
            {passwordError}
          </span>
        )}
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <Input
          placeholder={"Confirm Password"}
          type="password"
          value={confirmPassword}
          onChange={(val) => handleChange(val, "confirmPassword")}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
        {passwordMismatchError && (
          <div className="w-full text-red-500 text-[12px] font-normal capitalize leading-9">
            {passwordMismatchError}
          </div>
        )}
      </div>
      <Button
        className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex disabled:bg-slate-300`}
        disabled={
          !username ||
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword ||
          loading
        }
        onClick={() => onSubmit()}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-center text-white text-[16px] font-semibold leading-snug">
            Create account
          </div>
        )}
      </Button>
    </form>
  );
};

export default SignUp;
