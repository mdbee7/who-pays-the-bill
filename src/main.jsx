import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MyProvider } from "./context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <App />
  </MyProvider>
);
