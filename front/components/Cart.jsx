import React from "react";
import {FaTrashAlt} from "react-icons/fa"
import AlterQuantButton from "../components/AlterQuantButton";
import Checkout from "../containers/CheckoutContainer";

export default function Cart({
  cart,
  user,
  quantAddOne,
  quantSubOne,
  quantRemove,
  history
}) {
  return (
    <div className="container">
      {cart.length ? (
        <div className="row">
          <div className="col-8">
            {cart.map(cartItem => {
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
                      className="removeItemButton btn btn-danger"
                      onClick={() => quantRemove(cartItem)}
                    >
                    <FaTrashAlt/>
                    </button>
                    {price ? (
                      <p>
                        subtotal: ${" "}
                        {typeof price === "string"
                          ? parseInt(price.slice(1)) * quantity
                          : price * quantity}
                      </p>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {Object.keys(cart).length ? (
            <div className="checkoutDiv col-4">
              <p>
                TOTAL $
                {cart
                  .map(cartItem =>
                    typeof cartItem.price === "string"
                      ? parseInt(cartItem.price.slice(1)) * cartItem.quantity
                      : cartItem.price * cartItem.quantity
                  )
                  .reduce((total, nextItem) => total + nextItem)}
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  if (!Object.keys(user).length) {
                    alert("Please Log in");
                    document.querySelector("#loginButton").click();
                  } else history.push("/cart/checkout");
                }}
              >
                checkout
              </button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center row align-items-center">
          <hr />
          <h3>Your shopping cart is empty</h3>
          <hr />
        </div>
      )}
    </div>
  );
}
