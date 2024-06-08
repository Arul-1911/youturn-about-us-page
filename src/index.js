import React from "react";
import { createRoot } from "react-dom/client";
import "@src/styles/index.css";
import App from "./App";
import "./i18n";
import "symbol-observable";
import { Provider } from "react-redux";
import { store } from "@src/services/redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
