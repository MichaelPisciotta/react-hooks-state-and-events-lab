import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);
  function handleCart(){
    return(
      setIsAdded((isAdded) => !isAdded)

    )
  }

  const inCart = isAdded ? "in-cart" : "null"  

  return (
    <li className="{inCart}"> 
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">Add to Cart</button>
    </li>
  );


}

export default Item;


