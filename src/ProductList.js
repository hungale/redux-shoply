import React from "react";
import "./ProductList.css";
import { useSelector } from "react-redux";
// import { v4 as uuid } from 'uuid';
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const { products, cart } = useSelector(store => store);


  const renderProducts = () => (
    products.map(product => {
      return (
      <li key={product.id}>
        <NavLink exact to={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </NavLink>
        {/* <p>Price:{product.price}</p>
        <img src = {product.image_url} alt={product.name} />
        <div>
        <button onClick={()=>add(product)}>Add</button>
        <button onClick={()=>deleteByProductId(product.id)}>Delete</button>
        </div> */}
      </li>
    )})
  );

  return (
    <div className="ProductList">
      <NavLink exact to="/cart">
        Cart: {cart.length}
      </NavLink>
      {/* <Cart/> */}
      <hr />
      <ul>
        <p>Product List</p>
        {renderProducts()}
      </ul>
    </div>
  );
};

export default ProductList;