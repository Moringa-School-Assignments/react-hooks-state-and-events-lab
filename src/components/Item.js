import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("add");

  function addCart(){
    setCart(cart => cart === "add" ? "remove" : "add")
  }

  return (
    <li className={cart === "add" ? null : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart} onClick={addCart} >{cart === "add" ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
