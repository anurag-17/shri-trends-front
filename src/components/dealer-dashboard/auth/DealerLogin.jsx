"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

import RightSection from "./RightSection";
import { setDealerToken,dealerDetails ,removeDealerToken, rem_DealerDetails} from "@/redux/dealerSlice/authSlice";

const DealerLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // const state = useSelector((state) => state);

  const InputHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await axios.post("https://shree-trends-backend.vercel.app/api/auth/login", loginDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (res?.data?.success) {
        toast.success("Login successfully!");
        dispatch(setDealerToken(res?.data?.token));
        dispatch(dealerDetails(res?.data?.user));
        // console.log(res?.data?.user,"dealer detailsss");
        setLoading(false);
        router.push("/dealer");
      } else {
        toast.error("Login failed please try later!");
        dispatch(removeDealerToken());
        dispatch(rem_DealerDetails());
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.error || "Server error !");
      dispatch(removeDealerToken());
      dispatch(rem_DealerDetails());
      setLoading(false);
    }
  };
  

  return (
    <>
       <div className="flex items-center justify-center lg:min-h-screen  ">
        <div className="md:px-[50px] w-full mx-auto">
          <div className="relative flex flex-col 2xl:gap-x-20 xl:gap-x-10 gap-x-7 min-h-screen justify-center lg:shadow-none  items-center lg:flex-row space-y-8 md:space-y-0 w-[100%] px-[10px]bg-white lg:px-[40px] py-[20px] md:py-[40px] ">
            <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
              <form action="" className="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 justify-center p-8 lg:p-14 md:max-w-[80%] lg:w-full lg:max-w-[100%] mx-auto ">
                  <div className="text-left ">
                    <p className="mb-2 2xl:text-[40px] md:text-[35px] text-[30px] leading-[38px] font-bold">
                      Welcome 
                    </p>
                    <p className="2xl:text-[18px] md:text-[16px] text-[15px] font-[400] leading-[26px] mb-4 text-[#494949]">
                      Welcome back! Please enter your details
                    </p>
                  </div>
                  <div className="md:py-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="log_input w-full mt-2 custom-input"
                      onChange={InputHandler}
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="enter valid email ex. abc@gmail.com"
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="log_input w-full mt-2 custom-input"
                      onChange={InputHandler}
                      minLength={8}
                      required
                    />
                    <div className="flex items-center mt-4 px-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="mr-2"
                      />
                      <label
                        htmlFor="showPassword"
                        className="log_input-label"
                      >
                        Show Password
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className=" w-full bg-[#1f2432] font-medium text-white p-2 rounded-lg  hover:bg-white hover:border hover:border-gray-300 h-[50px] log-btn"
                    >
                      {isLoading ? "Loading.." : "Login"}
                    </button>
                    <Link href="/dealer/forgot-password">
                      <div className="text-[16px] font-medium underline text-center py-3 cursor-password">
                        Forgot password
                      </div>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerLogin; 
