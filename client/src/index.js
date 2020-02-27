import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import "./index.css";
import App from "./App";

function Index() {
  let initialState = {
    components: {
      cart: false,
      search: false
    },
    products: [],
    mensType: "",
    womensType: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "manage":
        return {
          ...state,
          components: action.components
        };
        break;
      case "addProduct":
        return {
          ...state,
          products: action.products
        };
        break;
      case "updateCart":
        return {
          ...state,
          products: action.products
        };
        break;
      case "mensType":
        return {
          ...state,
          mensType: action.mensType
        };
        break;
      case "womensType":
        return {
          ...state,
          womensType: action.womensType
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
