import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Galery from "./views/Galery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/galery',
            element: <Galery/>
        },
    ]

  },
]);

