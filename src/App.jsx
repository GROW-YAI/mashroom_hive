import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import AboutProduct from "./pages/home/sections/AboutProduct";
import Contact from "./pages/home/sections/Contact";
import Showcase from "./pages/home/sections/Showcase";
import Testimonial from "./pages/home/sections/Testimonial";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> },
      // { path: "about", element: <AboutProduct /> },
      // { path: "contact-us", element: <Contact /> },
      // { path: "product", element: <Showcase /> },
      // { path: "testimonials", element: <Testimonial /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
