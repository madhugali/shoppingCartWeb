import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const configureStore = () => {
  const middleWares = [thunk];
  const store = applyMiddleware(...middleWares)(createStore)(rootReducer);

  store.subscribe(() => {
    console.log("update state: ", store.getState());
  });

  return store;
};

export default configureStore;
