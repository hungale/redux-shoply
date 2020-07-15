import { ADD, DELETE, DELETE_FROM_CART, ADD_FROM_CART } from "./actionTypes";

export function addItem(item) {
  return {
    type: ADD,
    payload: item
  }
};

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: id
  }
};
export function deleteCartItem(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
};

export function addCartItem(id) {
  return {
    type: ADD_FROM_CART,
    payload: id
  }
}