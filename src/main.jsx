// // Import the global CSS
// import "./styles/global.css";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // Import pages
// import HomePage from "./pages/HomePage.jsx";
// import ProjectPage from "./pages/ProjectPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";

// // Import components
// import NavBar from "./components/NavBar.jsx";
// import { AuthProvider } from "./components/AuthProvider.jsx";

// // Define routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <NavBar />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/login", element: <LoginPage /> },
//       { path: "/project/:id", element: <ProjectPage /> },
//     ],
//   },
// ]);

// // Render the app
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

// /// v2 ///
// // import "./styles/global.css";
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import HomePage from "./pages/HomePage";
// // import ProjectPage from "./pages/ProjectPage";
// // import LoginPage from "./pages/LoginPage";
// // import NavBar from "./components/NavBar";
// // import AuthProvider from "./components/AuthProvider";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <NavBar />,
// //     children: [
// //       { path: "/", element: <HomePage /> },
// //       { path: "/login", element: <LoginPage /> },
// //       { path: "/project/:id", element: <ProjectPage /> },
// //     ],
// //   },
// // ]);

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <AuthProvider>
// //       <RouterProvider router={router} />
// //     </AuthProvider>
// //   </React.StrictMode>
// // );

// /// v3 ///
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import NavBar from "./components/NavBar";
// // import HomePage from "./pages/HomePage";
// // import ProjectPage from "./pages/ProjectPage";
// // import "./styles/global.css"; // Ensure global styles are applied

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <Router>
// //       <NavBar />
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/login" element={<LoginPage />} />
// //         <Route path="/project/:id" element={<ProjectPage />} />
// //       </Routes>
// //     </Router>
// //   </React.StrictMode>
// // );

// /// v4 ///
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import NavBar from "./components/NavBar";
// // import HomePage from "./pages/HomePage";
// // import ProjectPage from "./pages/ProjectPage";
// // import LoginPage from "./pages/LoginPage";
// // import AuthProvider from "./components/AuthProvider";
// // import "./styles/global.css";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <AuthProvider>
// //       <Router>
// //         <NavBar />
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/project/:id" element={<ProjectPage />} />
// //           <Route path="/login" element={<LoginPage />} />
// //         </Routes>
// //       </Router>
// //     </AuthProvider>
// //   </React.StrictMode>
// // );

// // V5 //
// import CreateProjectPage from "./pages/CreateProjectPage"; // Import CreateProjectPage

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/project/:id" element={<ProjectPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/create-project" element={<CreateProjectPage />} />{" "}
//           {/* Add route */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   </React.StrictMode>
// );

/// v6 ///
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import ProjectPage from "./pages/ProjectPage";
// import CreateProjectPage from "./pages/CreateProjectPage";
// import "./styles/global.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/project/:id" element={<ProjectPage />} />
//         <Route path="/create-project" element={<CreateProjectPage />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

// v7 //
// Import the global CSS
import "./styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

// Import components
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
