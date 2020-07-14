import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductList.css";
import { addItem} from "./actions";
import Cart from "./Cart";

const ProductList = () => {
  const { products } = useSelector(store => store);
  const dispatch = useDispatch();
  const add = (item, id) => {
    item.id =id;
    dispatch(addItem(item)); 
  }


  const productKeys = Object.keys(products);
  
  const renderProducts = () => (
    productKeys.map(key => {
      const product = products[key];
      return <li>
        <p>{product.name} Price:{product.price} </p>
        <img src = {product.image_url} alt={product.name} />
        <button onClick={()=>add(product, key)}>Add</button>
      </li>
    })
  );



  return (
    <div className="ProductList">
      <p>Cart</p>
      <Cart/>
      <hr />
      <ul>
      {renderProducts()}
      </ul>
    </div>
  );
};

export default ProductList;