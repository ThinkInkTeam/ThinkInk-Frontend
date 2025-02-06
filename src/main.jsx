import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Api from "./pages/Api.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import App from "./App.jsx";
import "./index.css";
import "./global/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/pricing",
    element: <ComingSoon />,
  },
  {
    path: "/about",
    element: <ComingSoon />,
  },
  {
    path: "/contact",
    element: <ComingSoon />,
  },
  {
    path: "/api",
    element: <ComingSoon />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
