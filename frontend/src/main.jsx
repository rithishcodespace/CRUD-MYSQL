import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css"
import App from "./App";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import route from "../src/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <StrictMode>
   <RouterProvider router = {route}/>
 </StrictMode>)
