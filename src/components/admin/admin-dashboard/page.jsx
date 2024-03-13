'use client';
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";

import HomeIcon from "../../../../public/admin/home.svg";
import PageIcon from "../../../../public/admin/page.svg";
import webIcon from "../../../../public/admin/web-site.svg";

import Users from "../../../../public/admin/users.svg";
import conversation from "../../../../public/admin/conversation.svg";
import contactIcon from "../../../../public/admin/contact-mail.svg";
import CloseIcon from '../../svg/CloseIcon';  
import LogoutIcon from '../../svg/Logout';
import signout from "../../../../public/admin/signout.svg";
import Image from 'next/image';
// import Pages from '../pages';
import { useRouter } from 'next/navigation';
import Dashboard from '../dashboard';
import Loader from "../loader";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Vendor from "../vendor";
import Vendors from "../vendors/vendors";

// import protectedRoute from "@/components/Utils/protectedRoute";
// import { destroyCookie } from "cookies";
// import { useAuth } from "@/components/Utils/AuthContext";
import { removeToken,rem_AdDetails } from "@/redux/adminSlice/authSlice";
import Products from "../product/products";
import Dealer from "../dealer/Dealer";
import protectedRoute from "@/config/protectedRoute";


const SideMenu = () => {

  const [ComponentId, setComponentId] = useState(1);
  const [showDrawer, setShowDrawer] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const router = useRouter();
  // const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("token" || "")) : "";
  const [isLoading, setIsLoading] = useState(false);
  // const { adminAuthToken } = useAuth();
  const dispatch = useDispatch();
  const adminAuthToken = useSelector((state) => state.auth?.token);
  const menu = [
    {
      id: 1,
      label: "Dashboard",
      component: <Dashboard />,
      icon: HomeIcon,
    },
    {
      id: 2,
      label: "Dealer",
      component: <Dealer />,
      icon: Users,
    },
    {
      id: 3,
      label: "Sub-Dealer",
    //   component: <AppForm />,
      icon: webIcon,
    },
    {
      id: 4,
      label: "Products",
      component:<Products/> ,
      icon: webIcon,
    },
    // {
    //   id: 5,
    //   label: "Vendor",
    //   component:<Vendor/> ,
    //   icon: Users,
    // },
    // {
    //   id: 6,
    //   label: "Vendors",
    //   component:<Vendors/> ,
    //   icon: Users,
    // }
  ];

  const handleClick = (id) => {
    setComponentId(id);
    setShowDrawer(false);
  };

  const handleSignout = async () => {
    try {
      const res = await axios.get(`https://shree-trends-backend.vercel.app/api/auth/adminLogout`, {
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/admin");
      } else {
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/admin");
        toast.error("Logout failed try again !");
      }
    } catch (error) {
      dispatch(removeToken());
      dispatch(rem_AdDetails());
      router.push("/admin");
      console.error("Error occurred:", error);
      toast.error(error?.response?.data?.error || "Invalid token !");
    }
  };

  
  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer/>
      <section className="">
        <div className="flex min-h-screen relative lg:static">
          <div
            className="py-2 px-3  absolute top-4 left-2 flex flex-col gap-[5px] cursor-pointer lg:hidden"
            onClick={() => setShowDrawer(true)}
          >
            <div className="bg-[black] h-[2px] w-[20px]"></div>
            <div className="bg-[black] h-[2px] w-[20px]"></div>
            <div className="bg-[black] h-[2px] w-[20px]"></div>
          </div>
          <div
            className={`w-[250px] sm:w-[300px] 2xl:w-[350px]  bg-[#313A46]  text-[white] lg:px-[20px] px-[10px] z-[11] drawer
                 ${showDrawer
                ? "block  absolute top-0 left-0 min-h-screen is-show"
                : "hidden lg:block"
              }`}
          >
            <div
              className="relative text-[white]  flex flex-col gap-[5px] cursor-pointer lg:hidden  text-right mr-3 mt-2"
              onClick={() => setShowDrawer(false)}
            >
              <div className="">
              
                <CloseIcon />
              </div>
            </div>

            <div className=" flex flex-col justify-between min-h-screen fixed lg:py-[40px] py-[10px] ">
              <div className="">
                <div className="flex justify-center items-center whitespace-pre-wrap ">
                  <h1 className="2xl:text-[30px] lg:text-[26px] text-[24px] font-semibold  text-center whitespace-nowrap">
                    Admin Dashboard
                  </h1>
                </div>
                <div className="bg-[white] h-[1px] w-[77%] lg:w-[80%] 2xl:w-[83%] mx-auto mt-[40px]"></div>
              </div>


              <div className="flex flex-col 2xl:gap-6 gap-3 ">
                {menu.map((item, index) => (
                  <div
                    key={index}
                    className={`pl-1 sm:pl-2 2xl:pl-3 py-3 mx-5 lg:mx-4 2xl:mx-5 rounded-md  flex gap-x-3 items-center cursor-pointer  transition-colors font-semibold dash-menu  hover:transition-all ease-in delay-100 duration-300  
                                    ${item.id === ComponentId
                        ? "bg-[#b8bbdf47]"
                        : "hover:bg-[#b8bbdf47] hover:text-[white] hover:rounded-md"
                      }  `}
                    onClick={() => handleClick(item.id)}
                  >
                    <Image
                      src={item?.icon}
                      alt={item.label}
                      width={50}
                      height={50}
                      className="h-[20px] w-[20px] fill-white"
                    />

                    <p className=" capitalize whitespace-nowrap ">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="">
                <div className="bg-[white] h-[1px] w-[77%] lg:w-[80%] 2xl:w-[83%] mx-auto my-[40px]"></div>
                <div
                  className={` pl-1 py-3 mx-5 rounded text-center cursor-pointer my-3 flex items-center transition-colors dash-menu gap-x-3  font-semibold hover:bg-[#b8bbdf47] hover:text-[white] hover:rounded-md }`}
                  onClick={handleSignout}
                >
                  {/* <LogoutIcon/> */}
                  <Image className='w-6' src={signout} alt='signout' />
                  <div>
                 
                    <p>Sign Out</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f3f3] w-full">
            {menu.map((item, index) => (
              <Fragment key={index}>
                {ComponentId === item.id && item.component}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default protectedRoute(SideMenu)
// export default SideMenu