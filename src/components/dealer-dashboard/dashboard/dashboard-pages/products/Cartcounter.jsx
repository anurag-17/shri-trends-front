// CartCounter.js

import React from 'react';
import { useSelector } from 'react-redux';

const CartCounter = () => {
  const cartItems = useSelector(state => state.cart.items); // Assuming your cart items are stored in state.cart.items


  return (
    <>
      {cartItems.length}
    </>
  );
};

export default CartCounter;
