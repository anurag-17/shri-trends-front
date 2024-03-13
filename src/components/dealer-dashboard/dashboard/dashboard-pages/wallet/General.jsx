import React from "react";

const General = () => {
  return (
    <>
      <section>
        <div className="text-[14px] space-y-4">
          <div className="flex ">
            <div className="w-80  ">Enable</div>
            <div>
            <label className="flex flex-col  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="flex ">
            <div className="w-80 ">Wallet Recharge</div>
            <div>
              <label className="flex flex-col  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className=" text-sm  text-gray-400 dark:text-gray-300">Enable to allow customer to recharge wallet</div>
              </label>
            </div>
          </div>

          <div className="flex ">
            <div className="w-80 ">Auto Complet Wallet Payment Order Status</div>
            <div>
            <label className="flex flex-col  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="text-sm  text-gray-400 dark:text-gray-300">Enable if you want to autocomplete order paid by wallet gateway</span>
              </label>
            </div>
          </div>

          <div className="flex ">
            <div className="w-80 ">Enable Wallet Script For My Account Wallet</div>
            <div>
            <label className="flex flex-col  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className=" text-sm  text-gray-400 dark:text-gray-300">Enable if unable to select wallet option in my account section</span>
              </label>
            </div>
          </div>

          <div className="flex ">
            <div className="w-80 ">Send Email or Wallet Amount Update to Customers</div>
            <div>
            <label className="flex flex-col  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className=" text-sm  text-gray-400 dark:text-gray-300">Enable to send email to user</span>
              </label>
            </div>
          </div>
             
          <div className="flex ">
            <div className="w-80 ">Enable Wallet Partial Payment Method</div>
            <input type="text" className="w-44 border" placeholder="Enter Email"/>
            </div>


          <div className="flex ">
            <div className="w-80 ">Enable Wallet Partial Payment Method</div>
            <div>
            <label className="flex flex-col  cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className=" text-sm  text-gray-400 dark:text-gray-300">Enable to allow customers to pay amount partially from wallet</span>
              </label>
            </div>
          </div>
          
          <div>
            <button className="px-3 py-2 bg-blue-500 text-white rounded-3xl text-[13px] hover:bg-blue-600">Save Settings</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default General;
