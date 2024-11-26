// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // here we import out pages
// import HomePage from "./pages/HomePage.jsx";
// // import ProjectPage from "./pages/ProjectPage.jsx";
// import AboutPage from "./pages/AboutPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";

// // here we import our components
// import NavBar from "./components/NavBar.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     //   element: <HomePage />,
//     // },
//     // {
//     //   path: "/about",
//     //   element: <AboutPage />,
//     // },
//     // {
//     //   path: "/contact",
//     //   element: <ContactPage />,

//     // puttin our NavBar as the main component will causes the children to render in the <Outlet />
//     element: <NavBar />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/about", element: <AboutPage /> },
//       { path: "/contact", element: <ContactPage /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* here we wrap our app in the router provider so they render */}
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

import NavBar from "./components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      // -{ path: "/project/", element: <ProjectPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render  */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
