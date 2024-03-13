"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import signout from "../../../../public/admin/signout.svg"

import CloseIcon from "@/components/svg/CloseIcon";
// import { removeToken, rem_DealerDetails } from "@/redux/adminSlice/authSlice";
import {
  removeDealerToken,
  rem_DealerDetails,
} from "@/redux/dealerSlice/authSlice";
import { sideMenus } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import DealerProtectedRoute from "@/config/dealerProtectedRoute";

const Dealer = () => {
  const dispatch = useDispatch();
  const [ComponentId, setComponentId] = useState(1);

  const [showDrawer, setShowDrawer] = useState(false);
  const authtoken = useSelector((state) => state?.dealer.token);
  const dealerName=useSelector((state)=>state?.dealer?.dealerDetails?.firstname);
 
  
  const router = useRouter();

  const handleClick = (id) => {
    setComponentId(id);
    setShowDrawer(false);
  };
  const handleSignout = async () => {
    // router.push("/dealer/login");
    // return
    try {
      const res = await axios.get(`https://shree-trends-backend.vercel.app/api/auth/logout`, {
        headers: {
          Authorization: authtoken,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeDealerToken());
        dispatch(rem_DealerDetails());
        router.push("/");
      } else {
        dispatch(removeDealerToken());
        dispatch(rem_DealerDetails());
        router.push("/");
      }
    } catch (error) {
      dispatch(removeDealerToken());
      dispatch(rem_DealerDetails());
      router.push("/");
      console.error("Error occurred:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SecondarySidebar = ({ sideMenus, handleClick }) => (
    <div className="fixed left-0 top-0 w-[87px] h-full bg-gray-900 p-4 text-white ">
      <div className="flex flex-col items-center gap-8  pt-[60px]">
        {sideMenus.map((item, index) => (
          <div
            key={index}
            className={`mx-4 py-[5px] flex gap-x-4 items-center cursor-pointer   font-semibold text-[16px] `}
            onClick={() => handleClick(item.id)}
          >
            <Image src={item.icon} className=""/>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="">
      <ToastContainer />

      <div className=" ">
      <div
    className={`fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu text-white transition-transform
         ${isOpen ? "active" : ""}`}
  >
    <div className="">
      <div className="flex flex-col 2xl:gap-6 gap-3 pt-[60px] px-[10px]">
        {sideMenus.map((item, index) => (
          <div
            key={index}
            className={`mx-4 py-[5px] flex gap-x-3 items-center cursor-pointer  transition-colors font-semibold text-[16px] 
                            ${item.id === ComponentId ? " border-b border-b-white" : " "}`}
            onClick={() => handleClick(item.id)}
          >
            <Image src={item.icon} className="w-4"/>
            {isOpen && <p className="capitalize whitespace-nowrap ">{item.label}</p>}
          </div>
        ))}
      </div>
      <div className="bg-white h-[1px] w-[79%] mx-auto mt-[100px]"></div>
    </div>

    <div
      className={` mx-5 rounded text-center cursor-pointer my-3 flex items-center transition-colors dash-menu gap-x-3 font-semibold  text-[16px] hover:text-primary  }`}
      onClick={handleSignout}
    >
      <Image className="w-6" src={signout} alt="signout" />
      <div>
        <p>Sign Out</p>
      </div>
    </div>
  </div>

    {/* Toggle Button */}
    <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"
        onClick={toggleSidebar}
      ></div>

         {/* Secondary Sidebar (Icons Only) */}
         {!isOpen && <SecondarySidebar sideMenus={sideMenus} handleClick={handleClick} />}
         
        {/* <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div> */}

        <div className={`w-full md:ml-64 bg-gray-50 min-h-screen transition-all main ${isOpen ? 'md:w-[calc(100%-256px)] ' : 'active '}`}>
       
        <div className="h-[50px] w-full bg-white px-[20px] flex justify-between items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30 mb-[20px] ">
        <div
          className="py-2 px-3 flex flex-col gap-[3px] cursor-pointer "
          onClick={toggleSidebar}
        >
          <div className="bg-black h-[2px] w-[20px]"></div>
          <div className="bg-black h-[2px] w-[20px]"></div>
          <div className="bg-black h-[2px] w-[15px]"></div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="">
            <Image
              src="/dealer/profile.svg"
              alt="profile"
              height={30}
              width={30}
            />
          </div>

          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center">
                  <div className="flex gap-1 items-end">
                    <p className="">{dealerName}</p>
                    <Image
                      src="/dealer/downarrow.svg"
                      alt="profile"
                      height={18}
                      width={18}
                    />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform scale-95"
                enterTo="transform scale-100"
                leave="transition ease-in duration=75"
                leaveFrom="transform scale-100"
                leaveTo="transform scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 z-50 mt-2 px-2 py-5 shadow-2xl rounded-lg origin-top-right border border-[#f3f3f3]  bg-white side-profile">
                  <div className="p-1 flex flex-col gap-4">
                  <Menu.Item>
                      <Link
                        href="/dealer"
                        className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                      >
                      
                      Setting
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="dealer/change-password"
                        className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                      >
                        {/* <PasswordIcon className="h-4 w-4 mr-2" /> */}
                        Change password
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                          onClick={handleSignout}
                        className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                      >
                        {/* <SignOutIcon /> */}
                        Sign out
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
          {sideMenus.map((item, index) => (
            <Fragment key={index}>
              {ComponentId === item.id && item.component}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default Dealer;
export default DealerProtectedRoute(Dealer);