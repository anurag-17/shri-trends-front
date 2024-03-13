import React from "react";

const WalletRecharge = () => {
  return (
    <>
      <section>
        <div className="space-y-4">
           <div className="flex">
            <div className="w-44 p-2">Add Balance ⟨₹⟩:</div>
            <input className="border rounded  px-2" type="number" placeholder="Enter Amount"/>
           </div>

           <div className="flex">
            <div className="w-44 p-2">Transaction Details</div>
            <input className="border  px-2" type="text" placeholder="Enter Details"/>
           </div>
        <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 mx-3 text-white rounded-3xl text-[13px]  px-3 py-2">Update Wallet</button>
        </div>
        </div>
      </section>
    </>
  );
};

export default WalletRecharge;
