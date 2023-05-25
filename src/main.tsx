import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./16_router/App";
import Router from "./18_context_router/Router";
import ParamTest from "./16_router/ParamTest";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router />
    {/* <ParamTest /> */}
  </React.StrictMode>
);
