import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Setting = () => {

  const dealerName=useSelector((state)=>state?.dealer?.dealerDetails?.firstname);
  const dealerEmail=useSelector((state)=>state?.dealer?.dealerDetails?.email);
  const dealerRefCode=useSelector((state)=>state?.dealer?.dealerDetails?.referralCode);
  const dealerLastName=useSelector((state)=>state?.dealer?.dealerDetails?.lastname);




  return (
    <section>
    <div className="mx-auto px-[70px] space-y-4">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
         Profile
        </div>
        <div className="collapse-content">
        <div className="p-4 sm:py-6 sm:px-10 shadow rounded max-w-[490px]  my-4">
         

          <div className="flex gap-5 flex-col justify-center text-[16px]  ">
            <div className="flex  flex-col  sm:flex-row sm:gap-3 justify-start">
              <p className="sm:w-[120px]">Name :</p>
              <p className="font-bold capitalize">
                {dealerName} {dealerLastName}
              </p>
            </div>
            <div className="flex  flex-col  sm:flex-row sm:gap-3  justify-start">
              <p className="sm:w-[120px]">Email :</p>
              <p className="font-bold">
               {dealerEmail}
               </p>
            </div>
            <div className="flex  flex-col  sm:flex-row sm:gap-3  justify-start">
              <p className="sm:w-[120px]">Referral Code :</p>
              <p className="font-bold">
              {dealerRefCode}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      </div>
      {/* <div className="container mx-auto px-[70px]">
        <div className=" py-[40px]">
          <p className="text-[24px]">Account</p>
        </div>
        <div className="flex gap-6 ">
          <div className="w-[40%]">
            <p className="">Personal Information</p>
            <p className="">
              {" "}
              Use a permanent address where you can receive mail.{" "}
            </p>
          </div>
          <div className="w-[60%]">
            <div className="flex items-center gap-5">
              <div className="">
            
              <Image
               src="/dealer/profile.svg"
                alt="profile"
                height={50}
                width={50}
              />
              </div>
              <div className="">
                <p className="">Change avatar</p>
                <p className="text-[13px]">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Setting;
