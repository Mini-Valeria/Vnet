import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import App from "./App";
import Home from "./Home";
import Login from "./Login";
import SOS from "./SOS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/login",
  element: <Login></Login>
  },
  {
    path: "/sos",
  element: <SOS></SOS>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
