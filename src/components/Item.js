import React, { useState } from "react";
import itemData from "../data/items";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  function handleCart() {
    setIsInCart((isInCart) => !isInCart);
  }
  const itemColor = isInCart ? "" : "purple";
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        style={{ background: itemColor }}
        onClick={handleCart}
        className={isInCart ? "remove" : "add"}
      >
        {" "}
        {isInCart ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
