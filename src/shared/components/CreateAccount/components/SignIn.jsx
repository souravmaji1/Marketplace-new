import { useAddress } from "@thirdweb-dev/react";
import { EnvelopeSimple, LockKey } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import Spinner from "Components/Spinner/Spinner";
import { BASE_URL, ERROR_ICON, SUCCESS_ICON } from "Root/constants";
import { setIsILoggedIn, setUser } from "Root/redux/slices/appSlice";
import { setToastData } from "Root/redux/slices/uiSlice";
import fetchWrapper from "Root/utils/fetchWrapper";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const initialData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const address = useAddress();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const { email, password } = formData;

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      let signinPayload = {
        address,
        email,
        password,
      };
      let { payload } = await fetchWrapper(
        `${BASE_URL}auth/login`,
        signinPayload,
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
            toastMessage: "Logged In successfully!",
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
      <div className="w-full md:w-[330px] h-[46px]">
        <Input
          placeholder={"Email Address"}
          type="email"
          value={email}
          onChange={(val) => handleChange(val, "email")}
          icon={<EnvelopeSimple pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px]">
        <Input
          placeholder={"Password"}
          type="password"
          value={password}
          onChange={(val) => handleChange(val, "password")}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
      </div>

      <Button
        className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex disabled:bg-slate-300`}
        disabled={!email || !password || loading}
        onClick={() => onSubmit()}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-center text-white text-[16px] font-semibold leading-snug">
            Sign In
          </div>
        )}
      </Button>
    </form>
  );
};

export default SignIn;
