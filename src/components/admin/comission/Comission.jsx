import CloseIcon from "@/components/svg/CloseIcon";
import Loader from "@/config/Loader";
import React, { useState } from "react";

const Comission = () => {

  let [isLoader, setLoader] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      {isLoader && <Loader />}
      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className=" mx-auto">
          <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
            <p className=" text-[22px] font-semibold">Comission</p>
            <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center md:justify-end">
              <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
                <input
                  type="text"
                  className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                  // value={searchText}
                  // onChange={handleSearchInput}
                  // onKeyDown={handleKeyDown}
                  placeholder="Search by name, contact, email."
                />
                {searchText !== "" ? (
                  <button
                    className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"
                    //   onClick={handleClearSearch}
                  >
                    <CloseIcon />
                  </button>
                ) : (
                  ""
                )}
                <button
                  className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black"
                  // onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[20px] font-semibold">One Month Comission</p>
            <div className="bg-white my-4 border pl-2 rounded-md">
              <p className="font-semibold my-4 text-[20px]">Your Comission</p>

              <p className="">
                Orders Upto 50 Products comission : ⟨₹⟩
                <span className="font-semibold">2800 </span>
              </p>
              <p>
                Orders from 51-100 products comission : ⟨₹⟩{" "}
                <span className="font-semibold">6500</span>
              </p>
              <p>
                Orders from 101 upto unlimited 10% of products comission : ⟨₹⟩{" "}
                <span className="font-semibold">9000</span>
              </p>

              <div className="my-4">
                <p className="font-semibold">
                  Comission from Subdealers sale : ⟨₹⟩{" "}
                  <span className="font-semibold">16000</span>
                </p>
              </div>

              <p className="font-bold my-4">
                Total Comission from all Dealers and Sub-dealers: ⟨₹⟩ 34300{" "}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[20px] font-semibold">
              Previous Months Comission
            </p>
            <div className="bg-white p-2 space-y-2">
              <label for="start ">By date:</label>
              <input
                className="ml-2 border border-gray-500 rounded-sm"
                type="date"
            
                name="trip-start"
                value=""
                min="2024-01-01"
              />

              <p>Total Comission from all Dealers and Sub-dealers :</p>
              <p className="border border-gray-500 rounded-sm w-28">⟨₹⟩ 50000</p>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Comission;
