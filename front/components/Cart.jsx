import React from "react";

import AlterQuantButton from "../components/AlterQuantButton";

export default function Cart({ cart, quantAddOne, quantSubOne, quantRemove }) {
  return (
    <div className="cartItemContainer">
      {cart &&
        cart.map(cartItem => {
          const { name, price, id, image, quantity } = cartItem;

          return (
            <div className="singleItemInCart" key={`${cartItem}_${id}`}>
              <img src={image} alt={`${name} image`} />
              <div className="singleItemText">
                <p>{name}</p>
                <p>{price}</p>
                <AlterQuantButton
                  product={cartItem}
                  quantity={quantity}
                  quantAddOne={quantAddOne}
                  quantSubOne={quantSubOne}
                  quantRemove={quantRemove}
                />
                <button
                  className="removeItemButton"
                  onClick={() => quantRemove(cartItem)}
                ></button>
              </div>
            </div>
          );
        })}
      <div id="cosa"></div>
    </div>
  );
}
