import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";

document.body.classList.add('overflow-y-hidden');
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
