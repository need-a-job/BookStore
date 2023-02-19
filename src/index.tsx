import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";


import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

/* < axios config > */

axios.defaults.baseURL = "http://localhost:8000/api";

// axios will add baseUrl before each request that we will send to the serverif we will provide the full url, then axios will ignore baseUrl

axios.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  const token = localStorage.getItem("token");
  /*access to storage and try to get the token.if the token exist this mean that we login alreadyand we need to send the token in the headers.*/
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
}); /*axios.interceptors.request will executed before each request to the server*/

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
