import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from "./indexReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const store = () => {
  return createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store;
