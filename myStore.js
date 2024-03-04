export const myCreateStore = (reducer) => {
  // store hold three methods --> dispatch(),subscribe() & getState()
  let state;
  function dispatch(action) {
    // dispatch an action....
    state = reducer(state, action);
  }

  function getState() {
    // getting state value....
    return state;
  }

  const store = {
    dispatch,
    getState,
  };

  store.dispatch({ type: "INIT" });

  return store;
};
