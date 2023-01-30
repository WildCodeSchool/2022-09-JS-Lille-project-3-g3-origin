import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserInfosContext } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserInfosContext>
      <App />
    </UserInfosContext>
  </React.StrictMode>
);
