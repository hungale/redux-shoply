import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./actions";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const { products, cart} = useSelector(state => state);
  const product = products.find(product => product.id === id);


  const dispatch = useDispatch();
  const add = (item) => {
    item.quantity = ++item.quantity || 0;
    dispatch(addItem(item)); 
  }

  const deleteByProductId = (id) => {
    dispatch(deleteItem(id)); 
  }
  return (
    <div className="Product">
      <NavLink exact to="/cart">
        Cart: {cart.length}
      </NavLink>
      <hr/>
      <h3>{product.name}</h3>
        <p>Price:{product.price}</p>
        <img src = {product.image_url} alt={product.name} />
        <div>
        <button onClick={()=>add(product)}>Add</button>
        <button onClick={()=>deleteByProductId(product.id)}>Delete</button>
        </div>
        <NavLink exact to="/products">Back to Products</NavLink>
    </div>
  );
};

export default Product;