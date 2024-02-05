import CartComponent from "@/app/components/cart/cart";
import { exampleProduct } from "@/app/components/data";
import Image from "next/image";
import React, { useState } from "react";

const Cart = () => {
  return (
    <main>
      <CartComponent />
    </main>
  );
};

export default Cart;
