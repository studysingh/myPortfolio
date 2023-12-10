import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    children: [
      { path: "/portfolio/", element: <Home /> },
      { path: "/portfolio/about/", element: <About /> },
      { path: "/portfolio/projects/", element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider basename={"/myPortfolio"} router={router} />
);
