import { Client, InternetIdentity } from '@bundly/ic-core-js';
import { IcpConnectContextProvider } from '@bundly/ic-react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './App';

export default function Apps() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    }
  ]);

  const client = Client.create({
    restCanisters: {
      backend: {
        baseUrl: process.env.REACT_APP_API_REST_URL
      }
    },
    providers: [
      new InternetIdentity({
        providerUrl: process.env.REACT_APP_INTERNET_IDENTITY_URL
      })
    ]
  });

  return (
    <IcpConnectContextProvider client={client}>
      <RouterProvider router={router} />
    </IcpConnectContextProvider>
  )
}