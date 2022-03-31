import React from "react";
import useCart from "../../hooks/useCard";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart (products)
  return (
    <div className="shop-container">
      <div className="products-container">

      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
      
    </div>
  );
};

export default Orders;
