import { createStore } from "redux";
import { myCreateStore } from "./myStore";

let initialState = {
  username: "",
};

// function increment() {
//   // mutating way
//   //   initialState.count = initialState.count + 1;
//   // +++ immutating state is done by below code +++ //

//   /* Redux state we should not update any state using below code . Instead, create a function which is auto called
//     by redux returning a new obj.
//   */
//   initialState = { ...initialState, count: initialState.count + 1 };
// }

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, username: action.payload };
      break;

    default:
      return state;
      break;
  }
}

// What redux will do . It'll call redux automatically when an action is dispatched

// initialState = redux(initialState, { type: "INCREMENT" });
// initialState = redux(initialState, { type: "DECREMENT" });
// initialState = redux(initialState, { type: "INCREMENT_BY", payload: 10 });

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const myStore = myCreateStore(reducer);

// console.log(store);
console.log(myStore);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "INCREMENT_BY", payload: 10 });
// store.dispatch({ type: "DECREMENT_BY", payload: 10 });

const btn = document.getElementById("btn");
const nameElement = document.getElementById("fname");
const label = document.getElementById("name-label");

btn.addEventListener("click", function () {
  // code here
  // console.log(nameElement.value);
  store.dispatch({ type: "CHANGE_NAME", payload: nameElement.value });
  label.innerHTML = nameElement.value;
});
