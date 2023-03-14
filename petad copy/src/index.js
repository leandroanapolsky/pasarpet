import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PetsContextProvider from "./components/Context";
import LogContextProvider from "./components/logContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LogContextProvider>
    <PetsContextProvider>
      <App />
    </PetsContextProvider>
  </LogContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
