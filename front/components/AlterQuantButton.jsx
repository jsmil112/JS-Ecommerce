import React from "react";

export default function AlterQuantButton({
  product,
  quantity,
  quantAddOne,
  quantSubOne,
  quantRemove
}) {
  return (
    <div id="alterQuant">
      <button onClick={() => quantSubOne(product)}>-</button>
      <span className="inblockLetter">{quantity}</span>
      <button onClick={() => quantAddOne(product)}>+</button>
    </div>
  );
}
