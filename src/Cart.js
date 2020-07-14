import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./actions";

const Cart = () => {

  const { cart } = useSelector(store => store.cart)
  const dispatch = useDispatch();
  const deleteIt = (id) => {
    dispatch(deleteItem(id)); 
  }


  return(
    <div>
      <ul>
      {cart?.map(product => 
        <li>
          <p>{product.name} Price:{product.price} </p>
          <img src = {product.image_url} alt={product.name} />
          <button onClick={()=>deleteIt(product.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default Cart;