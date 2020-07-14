import { products } from "./data.json";
import { ADD, DELETE } from "./actionTypes";

const inventory = Object.entries(products).map(([id, items]) => ({...items, id}));
const INITIAL_STATE = { products: inventory , cart: [] };
console.log("Initial store:", INITIAL_STATE);

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, cart: [...state.cart, action.payload.item]};

    case DELETE:
      const removeIdx = state.cart.findIndex(item => item.id === action.payload.id);
      return { 
        ...state, cart: state.cart.filter((_, idx) => idx !== removeIdx )
        // ...state, cart: state.cart.filter(item => item.id !== action.payload.id )
      };
    
    default:
      return state;
  }
}

export default rootReducer;