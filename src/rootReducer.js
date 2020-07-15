import { products } from "./data.json";
import { ADD, DELETE, DELETE_FROM_CART, ADD_FROM_CART } from "./actionTypes";

// {key: {items}, ...} -> [[key, item], ...] -> [{item, id}]
// converts nested object into an array of object
// moves the key ID into the object as "id" key
const inventory = Object.entries(products).map(([id, items]) => ({...items, id}));
const INITIAL_STATE = { products: inventory , cart: [] };
// console.log("Initial store:", INITIAL_STATE);
// console.log(products, Object.entries(products), inventory);

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      // const removeIdx = state.cart.findIndex(item => item.id === action.payload);
      // console.log(action.payload, action.payload.id, state.cart.map(el => el.id === action.payload.id ? action.payload: el));
      const addIdx = state.cart.findIndex(item => item.id === action.payload.id);
      console.log(action.payload, state.cart, addIdx);
      if(addIdx > -1) { // in the cart
        return { ...state, cart: state.cart.map((oldItem, idx) => idx === addIdx ? action.payload: oldItem)};
      } else { // not in the cart
        return { ...state, cart: [...state.cart, action.payload]};
      }
      

    case DELETE:
      const removeIdx = state.cart.findIndex(item => item.id === action.payload);
      return { 
        ...state, cart: state.cart.filter((_, idx) => idx !== removeIdx )
        // ...state, cart: state.cart.filter(item => item.id !== action.payload.id )
      };
      case DELETE_FROM_CART:
        const deleteIdx = state.cart.findIndex(item => item.id === action.payload);
        if(deleteIdx > -1 && state.cart[deleteIdx].quantity > 1) { // in the cart
          const tempCart = [...state.cart];
          tempCart[deleteIdx].quantity--;
          return { ...state, cart: tempCart};
        } else { // not in the cart
          return { 
            ...state, cart: state.cart.filter(item => item.id !== action.payload )
          };
        }
        
      case ADD_FROM_CART:
        const addCartIdx = state.cart.findIndex(item => item.id === action.payload);
        if(addCartIdx > -1 && state.cart[addCartIdx].quantity > 1) { // in the cart
          const tempCart = [...state.cart];
          tempCart[addCartIdx].quantity++;
          return { ...state, cart: tempCart};
        } else { // not in the cart
          return { 
            ...state, cart: state.cart.filter(item => item.id !== action.payload )
          };
        }
    
    default:
      return state;
  }
}

export default rootReducer;
