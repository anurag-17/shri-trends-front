import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '@/redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const removeItemHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          {/* Cart Items */}
          {cartItems.map(item => (
            <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
              {/* Product Image and Info */}
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box"><img src={item.image} alt={item.name} className="xl:w-[140px]"/></div>
                <div className="pro-data w-full max-w-sm ">
                  <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{item.title}</h5>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    {item.category}
                  </p>
                  <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${item.price}</h6>
                </div>
              </div>
              {/* Quantity and Remove Button */}
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <div className="flex items-center w-full mx-auto justify-center">
                  <button className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                    {/* Adjust quantity button */}
                    {/* You can add logic to adjust quantity */}
                  </button>
                  {/* Quantity input */}
                  <input
                    type="text"
                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    onClick={() => removeItemHandler(item.id)}>
                    {/* Remove button */}
                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                      <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                      <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                    </svg>
                  </button>
                </div>
                {/* Total price */}
                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                  ${item.price}
                </h6>
              </div>
            </div>
          ))}
          {/* End of Cart Items */}

          {/* Subtotal, Delivery Charge, and Total */}
          {/* You can calculate these based on cart items */}
          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            {/* Subtotal */}
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">$360.00</h6>
            </div>
            {/* Delivery Charge */}
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
            </div>
            {/* Total */}
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">$405.00</h6>
            </div>
          </div>
          {/* End of Subtotal, Delivery Charge, and Total */}

          {/* Continue to Payment Button */}
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
              Continue to Payment
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          {/* End of Continue to Payment Button */}
        </div>
      </section>
    </>
  );
}

export default Cart;
