import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root.jsx";
import Errorpage from "./Errorpage.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import AuthProvider from "./AuthProvider.jsx";
import Order from "./Order.jsx";
import Private from "./privateRoutes/Private.jsx";
import Profile from "./Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: 'order',
        element: <Private> <Order></Order> </Private>
      },
      {
        path: 'profile',
        element: <Private> <Profile></Profile> </Private>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
