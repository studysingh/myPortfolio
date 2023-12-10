import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";

const router = createBrowserRouter([
  {
    path: "/myPortfolio",
    element: <App />,
    children: [
      { path: "/myPortfolio", element: <Home /> },
      { path: "/myPortfolio/about/", element: <About /> },
      { path: "/myPortfolio/projects/", element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider basename={"/myPortfolio"} router={router} />
);
