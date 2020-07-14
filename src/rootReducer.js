import { products } from "./data.json";
import { ADD, DELETE } from "./actionTypes";

// {key: {items}, ...} -> [[key, item], ...] -> [{item, id}]
// converts nested object into an array of object
// moves the key ID into the object as "id" key
const inventory = Object.entries(products).map(([id, items]) => ({...items, id}));
const INITIAL_STATE = { products: inventory , cart: [] };
// console.log("Initial store:", INITIAL_STATE);
console.log(products, Object.entries(products), inventory);

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, cart: [...state.cart, action.payload]};

    case DELETE:
      const removeIdx = state.cart.findIndex(item => item.id === action.payload);
      return { 
        ...state, cart: state.cart.filter((_, idx) => idx !== removeIdx )
        // ...state, cart: state.cart.filter(item => item.id !== action.payload.id )
      };
    
    default:
      return state;
  }
}

export default rootReducer;
