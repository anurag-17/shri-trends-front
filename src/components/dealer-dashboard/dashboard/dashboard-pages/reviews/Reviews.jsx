import Image from "next/image";
import React from "react";

const Reviews = () => {
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
  //   }
  // ];

const comisionData=[
  {
    name:"Aman",
    com:3000
  },
  {
    name:"Kuldeep",
    com:5000
  },
  {
    name:"Rames",
    com:10000
  },
  {
    name:"Krishna",
    com:7000
  },
  {
    name:"Kuldeep",
    com:1000
  },
  {
    name:"Rakesh",
    com:20000
  },
  {
    name:"Hitesh",
    com:30000
  },
  {
    name:"Akash",
    com:4000
  },
  {
    name:"Devesh",
    com:39000
  },
];

const comisionRate=[
  {
   percnt:"4.00%" ,
   ratio:4.8,
   product:50,
   comision:2000,
   sale:50000,
  },
  {
    percnt:"6.00%" ,
    ratio:7.2,
    product:100,
    comision:6000,
    sale:100000,
   },
   {
    percnt:"8.00%" ,
    ratio:9.6,
    product:150,
    comision:12000,
    sale:150000,
   },
   {
    percnt:"10.00%" ,
    ratio:12,
    product:200,
    comision:20000,
    sale:200000,
   },
   {
    percnt:"12.00%" ,
    ratio:14.4,
    product:250,
    comision:3000,
    sale:250000,
   },
   {
    percnt:"14.00%" ,
    ratio:16.8,
    product:300,
    comision:42000,
    sale:300000,
   },
]


  return (
    <>
      <section>
        <div className="container mx-auto px-[70px]">
     

          <div className="bg-[#f3f3f3] rounded-lg py-2 px-4">
              <h1 className="text-2xl rounded font-bold text-gray-800">Comission</h1>
            </div>     

            <div className="bg-neutral-200 mt-4 p-4">
            <div>Our Comission Rates List</div>
            <div className="">
              <table className="border  rounded table-auto mt-[20px] w-full ">
                <thead className="">
                  <tr className=" ">
                    {/* {headItems.map((items, inx) => ( */}
                      <th className="py-3 px- text-left bg-white border-b ">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]">S.No.</p>
                      </th>
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]">Percentage (%)</p>
                      </th>
                     
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]">Ratio</p>
                      </th>
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]">Product</p>
                      </th>
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]">Ratio</p>
                      </th>
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]">Sale</p>
                      </th>
                    
                  </tr>
                </thead>
  
                <tbody>
                  {  
                    comisionRate?.map((items, index) => (
                      <tr key={index} className="border-b bg-white">
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-2">{index + 1 + "."}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.percnt}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.ratio}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.product}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.comision}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.sale}</td>
                        
                      </tr>
                    ))
                  }
                </tbody>
              </table>
          </div>

            </div>

            <div>
             

            </div>

            <div className="mt-4">
              <p className="text-[20px] font-semibold">One Month Comission</p>
              <div className="bg-white my-4 border pl-2 rounded-md">
              <p className="font-semibold my-4 text-[20px]">Your Comission</p>

              <p className="">Orders Upto 50 Products comission :  ⟨₹⟩<span className="font-semibold">2800 </span></p>
              <p>Orders from 51-100 products comission : ⟨₹⟩ <span className="font-semibold">6500</span></p>
              <p>Orders from 101 upto unlimited 10% of products comission : ⟨₹⟩ <span className="font-semibold">9000</span></p>
           

              <div className="my-4">
                <p className="font-semibold">Comission from Subdealers sale : ⟨₹⟩ <span className="font-semibold">16000</span></p>
                
              </div>

              <p className="font-bold my-4">Total Comission from all : ⟨₹⟩ 34300 </p>
              </div>
            </div>
          
            {/* <div className="">
              <table className="border  rounded table-auto mt-[20px] w-full ">
                <thead className="">
                  <tr className=" ">
                  
                      <th className="py-3 px-4 text-left bg-white border-b ">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]  ">Sno</p>
                      </th>
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]  ">Name</p>
                      </th>
                     
                      <th className="py-3 px-5 text-left bg-white border-b">
                        <p className=" text-[11px] font-medium uppercase text-[#72727b]  ">Comission</p>
                      </th>
                   
                
                  </tr>
                </thead>
  
                <tbody>
                  {  
                    comisionData?.map((items, index) => (
                      <tr key={index} className="border-b bg-white">
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5">{index + 1 + "."}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.name}</td>
                        <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.com}</td>
                        
                      </tr>
                    ))
                  }
                </tbody>
              </table>
          </div> */}
         




          {/* <div className="rounded-[10px] bg-white py-[20px]  flex justify-between items-start mt-[10px] px-6 overflow-x-scroll">
                <table className="w-full min-w-[640px] table-auto mt-[20px] ">
                  <thead className="">
                    <tr className=" ">
                      
                    </tr>
                  </thead>

                  <tbody>
                    {dummyProducts?.map((items, index) => (
                      <tr key={index} className="border-b border-b-[#f3f3f3]">
                
                        <td className="text-[14px] font-[400] py-3 px-5 place-content-start ">
                          <p className="">Risako M</p>
                          <p className="text-[#757373] font-medium leading-[25px]">May 16, 2021</p>
                        </td>
                        <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                           <div className="mt-2 flex items-center">
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                        </td>
                        <td className="text-[14px] font-[400] py-3 px-5 capitalize max-w-[350px]">
                          <p className="">Cant say enough good things</p>
                          <p className="text-[#757373] font-medium mt-4 leading-[25px]">I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
                          <p className="text-[#757373] font-medium mt-4 leading-[25px]">The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}

        
        </div>
      </section>
    </>
  );
};

export default Reviews;
