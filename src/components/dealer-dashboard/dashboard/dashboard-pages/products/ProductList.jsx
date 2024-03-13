import Image from "next/image";
import React, { useState, useEffect } from "react";
import icon1 from "../../../../../../public/admin/truck.svg";
import icon2 from "../../../../../../public/admin/user1.svg";
import icon3 from "../../../../../../public/admin/dollar.svg";
import icon4 from "../../../../../../public/admin/cart.svg";
import axios from "axios";
import Loader from "@/config/Loader";
import cloth from "../../../../../../public/admin/ethnic-cloth.jpg";
import { useSelector } from "react-redux";

const ProductList = () => {
  let [isLoader, setLoader] = useState(false);
  const [allData, setAllData] = useState([]);
  const [getProduct, setGetProduct] = useState([]);
  const [isRefresh, setRefresh] = useState(false);
  const adminAuthToken = useSelector((state) => state?.dealer?.token);

  //  --------get all Analytics Data------------
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    setLoader(true);
    const options = {
      method: "GET",
      url: `https://shree-trends-backend.vercel.app/api/product/analyticsCount`,
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoader(false);
          setAllData(response?.data);
        } else {
          setLoader(false);
          return;
        }
      })
      .catch((error) => {
        setLoader(false);
        console.error("Error:", error);
      });
  };

  // --------------Get allProducts--------

  useEffect(() => {
    defaultProduct(1);
  }, [isRefresh]);

  const defaultProduct = (pageNo) => {
    // setLoader(true);

    const option = {
      method: "GET",
      url: `https://shree-trends-backend.vercel.app/api/product/getAllProduct`,
    };
    axios
      .request(option)
      .then((response) => {
        setGetProduct(response?.data?.products);

        // setEditData(response?.data);
        // setLoader(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  // const dummyProducts = [
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  //   {
  //     id: "",
  //   },
  // ];

  return (
    <>
      {isLoader && <Loader />}
      <section>
        <div className="container mx-auto xl:px-[70px] sm:px-[20px] px-[20px]">
          {/* <div
            className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
          >
            <div className="px-4 pt-8 pb-10">
              <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
                <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                <img
                  className="mx-auto h-auto w-full rounded-full"
                  src="/images/n2yIu0Buhpft9wZ6tROzn.png"
                  alt=""
                />
              </div>
            </div>
          </div> */}

          <div className="bg-[#f3f3f3] flex flex-col items-start justify-center space-y-4 py-8 sm:flex-row sm:space-y-0 md:justify-between ">
            <div className="max-w-lg">
              <div className="font-bold text-[25px] 2xl:text-[35px] my-1 mx-3">
                Analytics <span className="font-normal"> Dashboard </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-4">
            {/* ---------todays sale--------- */}
            <div className="bg-white  p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Today Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon1} alt="image" />
              </div>
              <p>{allData?.todaySales}</p>
            </div>
            {/* ---------last 7 day sale sale--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Last 7 Days Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon2} alt="image" />
              </div>
              <p>{allData?.lastSevenDaySales}</p>
            </div>
            {/* ---------last 30  day sale--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Last 30 Days Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon3} alt="image" />
              </div>
              <p>{allData?.lastThirtyDaySales}</p>
            </div>
            {/* ---------last 180  day sale--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Last 180 Days Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon4} alt="image" />
              </div>
              <p>{allData?.lastOneEightyDaySales}</p>
            </div>
            {/* ---------total products--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Total Products
                </p>
                <Image className="w-7 2xl:w-10" src={icon1} alt="image" />
              </div>
              <p>{allData?.totalProduct}</p>
            </div>
            {/* ---------avaliable stocks--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Available Stock
                </p>
                <Image className="w-7 2xl:w-10" src={icon2} alt="image" />
              </div>
              <p>{allData?.availableStock}</p>
            </div>
            {/* ---------stock Value--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Stock Value
                </p>
                <Image className="w-7 2xl:w-10" src={icon3} alt="image" />
              </div>
              <p>{allData?.stockValue}</p>
            </div>
            {/* ---------Order Received--------- */}
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Order Received
                </p>
                <Image className="w-7 2xl:w-10" src={icon4} alt="image" />
              </div>
              <p>{allData?.orderReceived}</p>
            </div>
          </div>

          <div className="my-9">
          <p className="font-semibold text-[25px] 2xl:text-[30px] py-5 ">
              Last 30 Day&rsquo;s Best Selling
            </p>
            <div className="grid grid-cols-4 gap-4 rounded-sm">
              {getProduct.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 bg-white flex flex-col items-center cursor-pointer"
                >
                  <Image
                    src={cloth}
                    alt={item.title}
                    className="mb-2 w-[80px] 2xl:w-[100px]"
                  />
                  <p className="text-[13px] 2xl:text-[14px] font-semibold text-center">
                    {item.title}
                  </p>
                  <p className="text-[13px] 2xl:text-[14px] font-semibold text-center">
                    {item.description}
                  </p>
                  <p className="text-gray-600 mb-2 text-[14px] 2xl:text-[16px]">
                    Price: ${item.price}
                  </p>
                  <p className="text-gray-600 flex mb-2 text-[14px] 2xl:text-[16px]">
                    Size:
                    {item?.stocks.map((stock) => (
                      <p key={stock._id}>{stock.size + ","}</p>
                    ))}
                  </p>
                  <p className="text-gray-600 mb-2 text-[14px] 2xl:text-[16px]">
                    Stocks:
                    {item?.stocks[0]?.quantity
                      ? item?.stocks[0]?.quantity
                      : "0"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <main className="grid sm:grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 md:grid-cols-3 sm:px-8 lg:mt-8  xl:grid-cols-4 lg:gap-x-4 lg:px-0">
            {dummyProducts.map((items, index) => {
              return (
                <article
                  className="relative bg-white px-3 py-2 rounded"
                  key={index}
                >
                  <div className="aspect-square overflow-hidden border border-[#f3f3f3] bg-[#69273267]">
                    <img
                      className="h-aut0 w-full transition-all duration-300 group-hover:scale-125"
                      src={items.imageSrc}
                      alt=""
                    />
                  </div>

                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                        <a href="#" title="" className="">
                          {items.title}
                          <span className="absolute" aria-hidden="true"></span>
                        </a>
                      </h3>
                      <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                        {" "}
                        ${items.oldPrice}{" "}
                      </del>
                    
                    </div>

                    <div className="text-right">
                      <p className="cursor-pointer ">
                        {" "}
                        <Image
                          src="/dealer/share.svg"
                          alt="share"
                          height={20}
                          width={20}
                          className="ml-auto"
                        />
                      </p>

                      <p className="text-xs font-normal sm:text-sm md:text-base mt-2">
                        ${items.price}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </main> */}
        </div>
      </section>
    </>
  );
};

export default ProductList;
