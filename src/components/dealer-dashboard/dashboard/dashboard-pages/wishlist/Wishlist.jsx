import React from 'react'

const Wishlist = () => {
  const dummyData = [
    {
      id: 1,
      title: 'Sample Product 1',
      stockstatus: 'In Stock',
      image: 'https://via.placeholder.com/150',
      price: '$19.99',
      size: 'Medium',
    },
    {
      id: 2,
      title: 'Sample Product 2',
      stockstatus: 'In Stock',
      image: 'https://via.placeholder.com/150',
      price: '$24.99',
      size: 'Large',
    },
    // Add more dummy data as needed
  ];


  return (
    <>
    <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className=" mx-auto">
          <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
            <p className=" text-[22px] font-semibold">My Wishlist</p>
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
               
                  <button
                    className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"
                    //   onClick={handleClearSearch}
                  >
                    
                  </button>
                
                <button
                  className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black"
                  // onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="  mt-4 bg-gray-600 hover:bg-gray-700 px-3 py-2 text-white rounded-md text-[12px]">
              Remove All
            </button>
          </div>
         
          <div className="rounded-[10px] bg-white 2xl:py-[30px] 2xl:px-[20px] flex justify-between items-center  2xl:p-6 overflow-x-scroll">
            <table className="w-full min-w-[640px] table-auto mt-[20px] ">
              <thead className="">
                <tr className="border-b ">
                  <th className="py-3 px- text-left bg-white">
                    <p className="flex text-[13px] font-medium uppercase text-[#72727b]">
                      <input
                        type="checkbox"
                        className="mx-1"
                //         checked={selectAll}
                // onChange={toggleSelectAll}
                      />
                      
                    </p>
                  </th>
                  {/* <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                  S.No.
                    </p>
                  </th> */}
                  <th className="py-3 px-5 text-left bg-white">
                    <p className=" block text-[13px] font-medium uppercase text-[#72727b]">
                    Product name
                    </p>
                  </th>

                  <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                      Image
                    </p>
                  </th>
                  <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                      Price
                    </p>
                  </th>
                  <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                    Quantity
                    </p>
                  </th>
                  <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                      Size
                    </p>
                  </th>
                  <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                    Stock Status
                    </p>
                  </th>
                  
                  <th className="py-3 px-5 text-left bg-white">
                    <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                      Action
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px- text-left">  <input  type="checkbox" className="" /></td>
              <td className="py-2 px-5 text-left text-[12px]">{item.title}</td>
              <td className="py-2 px-5 text-left ">
                <img src={item.image} alt={item.title} className="w-16 h-16" />
              </td>
              <td className="py-2 px-5 text-left text-[12px]">{item.price}</td>
              <td className="py-2 px-5 text-left text-[12px]"><input value={1} type='number'/></td>


              
              <td className="py-2 px-5 text-left text-[12px]">{item.size}</td>
              <td className="py-2 px-5 text-left text-[12px]">{item.stockstatus}</td>

              <td className="py-2 px-5 text-left"><button
                            className="btn_cls"
                            //   onClick={() => {
                            //     setDialogMatch(true);
                            //     setDeleteId(product?._id);
                            //   }}
                          >
                            Add to cart
                          </button></td>
            </tr>
          ))}
        </tbody>
              
            </table>
          </div>



        </div>
      </section>
    </>
  )
}

export default Wishlist