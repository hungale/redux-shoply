import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from './ProductList';
import Cart from './Cart';
import Product from './Product';

const Routes = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/products">
          <ProductList/>
        </Route>
        <Route exact path="/products/:id">
          <Product/>
        </Route>

        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Redirect to="/products"/>
      </Switch>
    </div>
  );
};

export default Routes;