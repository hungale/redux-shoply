import {products} from "./data.json";
// console.log(Object.entries(products), Object.values(products));
const INITIAL_STATE = { products , cart: [] };
// console.log("Initial store:", INITIAL_STATE);

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default rootReducer;