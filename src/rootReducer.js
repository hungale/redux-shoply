import {products} from "./data.json";
import { ADD, DELETE } from "./actionTypes";

const INITIAL_STATE = { products , cart: [] };
console.log("Initial store:", INITIAL_STATE);


const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, cart: [...state.cart, action.payload.item]};

    case DELETE:
      return { 
        ...state, cart: state.cart.filter(item =>Object.keys(item)[0]=== action.payload.id )
      };
    
    default:
      return state;
  }
}

export default rootReducer;