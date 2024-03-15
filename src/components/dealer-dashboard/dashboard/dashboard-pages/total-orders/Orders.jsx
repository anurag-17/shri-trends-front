import Image from "next/image";
import React from "react";
import kurta from "../../../../../../public/admin/kurtaw.jpg";
import shol from "../../../../../../public/admin/shol.jpg";
import shrug from "../../../../../../public/admin/sari1.jpg";
import ww from "../../../../../../public/admin/suit.jpg";

const Orders = () => {
  const headItems = [
    "S. No.",
    "Title",
    " Description",
    " Image",
    "Price",
    "Size/Quantity",
  ];
  const getProduct = [
    {
      id: 1,
      title: "Kurta women",
      image: kurta,
      description: "Womens clothing cotton",
      stock: [
        {
          size: "M,XL",
          quantity: 14,
        },
      ],

      price: 1200,
     
    },
    {
      id: 2,
      title: "Pashmina Sholl",
      image: shol,
      description: "Made With Hand Original",
      stock: [
        {
          size: "M",
          quantity: 30,
        },
      ],
      price: 1500,
    
    },
    {
      id: 3,
      title: "Shrug",
      image: shrug,
      description: "Good Quality Product",

      stock: [
        {
          size: "S,M,L",
          quantity: 10,
        },
      ],
      price: 600,
    
    },
    {
      id: 4,
      title: "Kurta women",
      image: kurta,
      description: "Womens clothing cotton",
      stock: [
        {
          size: "S,XL",
          quantity: 17,
        },
      ],
      price: 400,
   
    },
    {
      id: 5,
      title: "Womens top",
      image: ww,
      description: "Womens",
      stock: [
        {
          size: "M,XL,XXL",
          quantity: 23,
        },
      ],
      price: 500,
    
    },
  ];

  const dummyProducts = [
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
  ];
  return (
    <>
      <section>
        <div className="container mx-auto px-[70px]">
          <div className="bg-[#f3f3f3] flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div className="max-w-lg">
              <h1 className="text-2xl font-bold text-gray-800">
                Order History
              </h1>
              <p className="mt-2 text-gray-600">
                Check the status of recent orders, manage returns, and discover
                similar products.
              </p>
            </div>
            <div className=""></div>
          </div>

          <div className="mt-4">
            <p className="text-[20px] my-5 font-semibold">
              Order History of Present Month
            </p>

            <div></div>
          </div>

          <div className=" rounded-[10px] bg-white 2xl:py-[30px] 2xl:px-[20px] flex justify-between items-center mt-[20px] 2xl:p-6 overflow-x-scroll">
            <table className="w-full min-w-[640px] table-auto mt-[20px]">
              <thead className="">
                <tr className="border-b ">
                  {headItems.map((items, inx) => (
                    <th className="py-3 px-5 text-left bg-white" key={inx}>
                      <p className="block text-[10px] font-medium uppercase text-[#72727b] ">
                        {" "}
                        {items}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {getProduct.map((product, index) => (
                  <tr key={index} className="border-b">
                  
                    <td className="text-[10px] font-[400] py-3 px-5">
                      {index + 1}
                    </td>
                    <td className="text-[10px] font-[400] py-3 px-5">
                      {product.title}
                    </td>
                    <td className="text-[10px] font-[400] py-3 px-5 capitalize">
                      {product.description}
                    </td>
                    <td className="text-[10px] font-[400] py-3 px-">
                      <Image
                        className="w-16 flex mx-auto object-contain"
                        src={product.image}
                        alt={product.title}
                        width={50}
                        height={50}
                      />
                    </td>
                    <td className="text-[10px] font-[400] py-3 px-5">
                      ⟨₹⟩ {product.price}
                    </td>
                    <td className="text-[10px] font-[400] py-3 px-5 capitalize">
                    {product.stock.map((stockItem, stockIndex) => (
        <div key={stockIndex}>
          Size: {stockItem.size}, Quantity: {stockItem.quantity}
        </div>
      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
            {dummyProducts.map((items, index) => (
              <article
                className="relative bg-white px-3 py-2 rounded"
                key={index}
              >
                <div className="aspect-square overflow-hidden border border-[#f3f3f3] bg-[#69273267]">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="/images/vxPx1IPRjSynYYiQve8vF.png"
                    alt=""
                  />
                </div>
        
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" className="">
                        Silk Saare
                        <span className="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
             
                  </div>
                  <div className="text-right">
              
                    <p className="text-xs font-normal sm:text-sm md:text-base mt-2">
                      $99.00
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </main> */}
        </div>
      </section>
    </>
  );
};

export default Orders;
