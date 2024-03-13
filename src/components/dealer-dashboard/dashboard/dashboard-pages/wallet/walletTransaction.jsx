import React from 'react'

const WalletTransaction = () => {
    const comisionData=[
        {
          name:"Aman",
          amount:3000,
          detail:"Lorem Ipsum Data",
          transaction:"asded455fr7ffg",
          date:"25-feb-2024"
           },
        {
          name:"Kuldeep",
          amount:5000,
          detail: "Lorem Ipsum Data",
          transaction:"asggteed455fr7f4g",   
          date:"02-feb-2024"
            },
        {
          name:"Rames",
        amount:10000,
          detail: "Lorem Ipsum Data",
          transaction:"as23ded455fr7ffg",
          date:"12-jan-2024"

        },
        {
          name:"Krishna",
          amount:7000,
          detail: "Lorem Ipsum Data",
          transaction:"as21ed455fr7ff3g",
          date:"04-dec-2023" 
             },
        {
          name:"Kuldeep",
          amount:1000,
          detail:  "Lorem Ipsum Data",
          transaction:"s53ded455fr7ffg",
          date:"09-jan-2024"  
           },
        {
          name:"Rakesh",
        amount:20000,
          detail:"Lorem Ipsum Data",
          transaction:"ghjg3asdd455fr7ffg",
          date:"05-dec-2023"  

        },
        {
          name:"Hitesh",
        amount:30000,
          detail:"Lorem Ipsum Data",
          transaction:"de4d45uy5fr7ffg",
          date:"17-nov-2023"

        },
        {
          name:"Akash",
          amount:4000,
          detail:  "Lorem Ipsum Data",
          transaction:"egfdg3d455fr7ffg",
          date:"22-nov-2023"  
   
        },
        {
          name:"Devesh",
        amount:39000,
          detail:"Lorem Ipsum Data",
          transaction:"po5ed455fr7ffg",
          date:"01-nov-2023"

        },
      ]


  return (
   <>
    <section>
        <div>
          <div className="">
            <table className=" table-auto mt-[20px] w-full ">
              <thead className="">
                <tr className=" ">
                  {/* {headItems.map((items, inx) => ( */}
                    <th className="py-3 px- text-left bg-white border-b ">
                      <p className=" text-[11px] font-medium uppercase text-[#72727b]">Sno</p>
                    </th>
                    <th className="py-3 px-5 text-left bg-white border-b">
                      <p className=" text-[11px] font-medium uppercase text-[#72727b]">Name</p>
                    </th>
                   
                    <th className="py-3 px-5 text-left bg-white border-b">
                      <p className=" text-[11px] font-medium uppercase text-[#72727b]">Amount</p>
                    </th>
                    <th className="py-3 px-5 text-left bg-white border-b">
                      <p className=" text-[11px] font-medium uppercase text-[#72727b]">Details</p>
                    </th>
                    <th className="py-3 px-5 text-left bg-white border-b">
                      <p className=" text-[11px] font-medium uppercase text-[#72727b]">Transaction Id</p>
                    </th>
                    <th className="py-3 px-5 text-left bg-white border-b">
                      <p className=" text-[11px] font-medium uppercase text-[#72727b]">Date</p>
                    </th>

                
                </tr>
              </thead>

              <tbody>
                {  
                  comisionData?.map((items, index) => (
                    <tr key={index} className="border-b bg-white">
                      <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-2">{index + 1}</td>
                      <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.name}</td>
                      <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 ">{items?.amount}</td>
                      <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 capitalize">{items?.detail}</td>
                      <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 c">{items?.transaction}</td>
                      <td className="text-[12px] 2xl:text-[16px] font-[400] py-3 px-5 c">{items?.date}</td>

                      

                      
                    </tr>
                  ))
                }
              </tbody>
            </table>

        </div>
        </div>
    </section>
   </>
  )
}

export default WalletTransaction