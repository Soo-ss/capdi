import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/reset.scss";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/modules";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider
        store={createStoreWithMiddleware(
          rootReducer,
          (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
