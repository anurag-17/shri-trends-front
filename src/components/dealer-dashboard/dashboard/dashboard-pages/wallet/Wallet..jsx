import React from "react";

const Wallet = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-[70px]">
          <div className="bg-[#f3f3f3]   py-8 px-4">
            <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
          </div>
          <div>
            <div className="bg-white mt-4 ">
             <ul className="flex p-4 gap-6 text-[14px] ">
                <li className="hover:text-blue-500 cursor-pointer">General</li>
                <li className="hover:text-blue-500 cursor-pointer">Wallet</li>
                <li className="hover:text-blue-500 cursor-pointer">Wallet Transaction</li>
                <li className="hover:text-blue-500 cursor-pointer">Withdrawl Request</li>
                <li className="hover:text-blue-500 cursor-pointer">Wallet Cashback</li>
                <li className="hover:text-blue-500 cursor-pointer">Wallet Action</li>  

             </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Wallet;
