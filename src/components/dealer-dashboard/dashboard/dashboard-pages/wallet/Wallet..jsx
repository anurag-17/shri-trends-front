import Link from "next/link";
import React from "react";
import WalletRecharge from "./walletRechrge/walletRecharge";
import General from "./General";
import WalletTransaction from "./walletTransaction";

const Wallet = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-[70px]">
          <div className="bg-[#f3f3f3]   py-6 px-4">
            <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
          </div>

          <div className="mt-4">
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="General"
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
              <General/>
            
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Wallet"
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <WalletRecharge/>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Wallet Transaction"
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <WalletTransaction/>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Withdrawl Request"
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                Tab content 4
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Wallet Cashback"
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                Tab content 5
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Wallet Action"
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                Tab content 6
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
