import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./assets/Root/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import SummaryMolding from "./assets/pages/SummaryMolding.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/summary",
        element: <SummaryMolding />,
        loader: () => fetch("http://localhost:5000/production"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
