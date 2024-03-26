import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '@/redux/cartSlice';

const page = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
  
    const removeItemHandler = (productId) => {
      dispatch(removeFromCart(productId));
    };
  return (
    <div>page</div>
  )
}

export default page