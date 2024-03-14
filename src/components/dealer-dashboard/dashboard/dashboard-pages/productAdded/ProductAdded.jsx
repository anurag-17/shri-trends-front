import CloseIcon from '@/components/svg/CloseIcon';
import Loader from '@/config/Loader';
import React, { useEffect, useState } from 'react';
import axios from "axios";


export const headItems = [
    "S. No.",
    "Title",
    " Description",
    " Image",
    "Price",
    "Size/Quantity",
   
    "Action",
  ];


const ProductAdded = () => {
    let [isLoader, setLoader] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [isRefresh, setRefresh] = useState(false);
    const [getProduct, setGetProduct] = useState([]);
    const visiblePageCount = 10;



    useEffect(() => {
        defaultProduct(1);
      }, [isRefresh]);
    
      const defaultProduct = (pageNo) => {
        // setLoader(true);
    
        const option = {
          method: "GET",
          url: `https://shree-trends-backend.vercel.app/api/product/getAllProduct?page=${pageNo}&limit=${visiblePageCount}`,
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




  return (

<>
{
          isLoader && <Loader/>
        }
        <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
          <div className=" mx-auto">
            <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
              <p className=" text-[22px] font-semibold">Product Added by You</p>
              <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center md:justify-end">
                <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
                  <input
                    type="text"
                    className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                    value={searchText}
                    // onChange={handleSearchInput}
                    // onKeyDown={handleKeyDown}
                    placeholder="Search by name, contact, email."
                  />
                  {searchText !== "" ? (
                    <button
                      className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"
                    //   onClick={handleClearSearch}
                    >
                     <CloseIcon/>
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
            
            <div className="rounded-[10px] bg-white 2xl:py-[30px] 2xl:px-[20px] flex justify-between items-center mt-[20px] 2xl:p-6 overflow-x-scroll">
          <table className="w-full min-w-[640px] table-auto mt-[20px] ">
            <thead className="">
              <tr className="border-b ">
                {headItems.map((items, inx) => (
                  <th className="py-3 px-5 text-left bg-white" key={inx}>
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                      {" "}
                      {items}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            {Array.isArray(getProduct) && getProduct.length > 0 && (
              <tbody>
                {getProduct.map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {index + 1}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {product.title}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                      {product.description}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {/* {product.images.length > 0 && (
        <Image
          className="w-16 flex mx-auto"
          src={product.images[0].url[0]}
          alt={product.title} width={50} height={50}
        />
      )} */}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5">
                      {product.price}
                    </td>
                    <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                      {/* Displaying size and quantity of each stock */}
                      {product.stocks.map((stock, stockIndex) => (
                        <div key={stockIndex}>
                          Size: {stock.size}, Qty: {stock.quantity}
                        </div>
                      ))}
                    </td>

                    <td className="text-[14px] font-[400] py-3 px-5">
                      <div className="flex flex-col md:flex-row items-center gap-x-5">
                        {/* <button
                          className="btn_cls"
                          onClick={() => openModall(product?._id)}
                        >
                          Edit
                        </button> */}
                        <button
                          className="btn_cls"
                        //   onClick={() => {
                        //     setDialogMatch(true);
                        //     setDeleteId(product?._id);
                        //   }}
                        >
                          Remove
                        </button>
                        <button
                          className="btn_cls"
                        //   onClick={() => {
                        //     setDialogMatch(true);
                        //     setDeleteId(product?._id);
                        //   }}
                        >
                          Edit Quantity
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>




      </div>
            </section>

</>
  )
}

export default ProductAdded