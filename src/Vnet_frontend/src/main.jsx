import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Client, InternetIdentity } from "@bundly/ares-core";
import { IcpConnectContextProvider } from "@bundly/ares-react";
import MyMap from "./LeafletMap";
import Home from "./Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/map",
    element: <MyMap></MyMap>
  }
]);

const client = Client.create({
  restCanisters: {
    backend: {
      baseUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943",
    },
  },
  providers: [
    new InternetIdentity({
      providerUrl: "http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/",
    }),
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IcpConnectContextProvider client={client}>
      <App></App>
    <RouterProvider router={router} />
    </IcpConnectContextProvider>
  </React.StrictMode>,
);