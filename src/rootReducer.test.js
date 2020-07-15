import rootReducer from "./rootReducer";

describe("rootReducer works", () => {
  it("works for ADD", () => {
    expect(
      rootReducer({ cart: [] }, { type: "ADD", payload: "..."  })
    ).toEqual({ cart: ["..."] });
  });
  it("works for DELETE", () => {
    expect(
      rootReducer({ cart: [{id: "1"}] }, { type: "DELETE", payload: "1" })
    ).toEqual({ cart: [] });
  });
});

// const rootReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ADD:
//       return { ...state, cart: [...state.cart, action.payload.item]};

//     case DELETE:
//       const removeIdx = state.cart.findIndex(item => item.id === action.payload.id);
//       return { 
//         ...state, cart: state.cart.filter((_, idx) => idx !== removeIdx )
//         // ...state, cart: state.cart.filter(item => item.id !== action.payload.id )
//       };
    
//     default:
//       return state;
//   }
// }