import { createStore } from "redux";
import { myCreateStore } from "./myStore";

let initialState = {
  value: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
      break;

    case "DECREMENT":
      return { ...state, value: state.value - 1 };
      break;

    case "INCREMENT_BY":
      return { ...state, value: state.value + action.payload };
      break;

    case "DECREMENT":
      return { ...state, value: state.value - action.payload };
      break;

    default:
      return state;
      break;
  }
}

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const myStore = myCreateStore(reducer);

// console.log(store);
console.log(myStore);

// =====  store contain three imp methods   =======

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT_BY", payload: 10 });
// store.dispatch({ type: "DECREMENT_BY", payload: 10 });
