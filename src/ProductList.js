import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const { products, cart } = useSelector(store => store);
  console.log(products, cart);
  // for(let key in products)
  const productKeys = Object.keys(products);
  console.log(productKeys);
  
  const renderProducts = () => (
    productKeys.map(key => {
      const product = products[key];
      return <li>
        <p>{product.name}</p>
      </li>
    })
  );


  return (
    <div className="ProductList">
      <ul>
      {renderProducts()}
      </ul>
    </div>
  );
};

export default ProductList;