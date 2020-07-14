import { ADD, DELETE } from "./actionTypes";

export function addItem(item) {
  return {
    type: ADD,
    payload: {item}
  }
};

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: {id}
  }
};