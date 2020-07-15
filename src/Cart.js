import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, addCartItem } from "./actions";
import { NavLink } from "react-router-dom";

const Cart = () => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch();
  const deleteFromCart = (id) => {
    dispatch(deleteCartItem(id)); 
  }
  const addFromCart = (id) => {
    dispatch(addCartItem(id)); 
  }


  return (
    <div className="Cart">
      <h3>Cart</h3>
      <ul>
      {cart && cart.map(product => 
        <li key={product.id}>
          <p>{product.name} Price:{product.price} </p>
          <p>Quantity: {product.quantity} </p>
          <img src = {product.image_url} alt={product.name} />
          <button onClick={()=>addFromCart(product.id)}>Add</button>
          <button onClick={()=>deleteFromCart(product.id)}>Delete</button>
        </li>)}
      </ul>
      <NavLink exact to="/products">Back to Products</NavLink>
    </div>
  );
};

export default Cart;