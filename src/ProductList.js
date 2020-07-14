import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductList.css";
import { addItem, deleteItem} from "./actions";
import Cart from "./Cart";
import { v4 as uuid } from 'uuid';

const ProductList = () => {
  const { products, cart } = useSelector(store => store);
  const dispatch = useDispatch();
  const add = (item) => {
    // item.cart_id = uuid();
    dispatch(addItem(item)); 
  }

  const deleteIt = (id) => {
    dispatch(deleteItem(id)); 
  }


  const renderProducts = () => (
    products.map(product => {
      return (
      <li key={product.id}>
        <h3>{product.name}</h3>
        <p>Price:{product.price}</p>
        <img src = {product.image_url} alt={product.name} />
        <div>
        <button onClick={()=>add(product)}>Add</button>
        <button onClick={()=>deleteIt(product.id)}>Delete</button>
        </div>
      </li>
    )})
  );

  // console.log(cart);
  // console.log(products);

  return (
    <div className="ProductList">
      <p>Cart: {cart.length}</p>
      <Cart/>
      <hr />
      <ul>
        <p>Product List</p>
        {renderProducts()}
      </ul>
    </div>
  );
};

export default ProductList;