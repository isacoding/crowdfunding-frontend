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
// Import global styles that apply to the entire application
// import "./styles/global.css";

// // Import core React dependencies
// import React from "react";
// import ReactDOM from "react-dom/client";

// // Import routing dependencies - notice we're adding Outlet for nested routing
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // Import all pages that will be used in our application
// import HomePage from "./pages/HomePage.jsx";
// import ProjectPage from "./pages/ProjectPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import SignupPage from "./pages/SignupPage.jsx";

// // Import components needed at the application root level
// import NavBar from "./components/NavBar.jsx";
// import { AuthProvider } from "./components/AuthProvider.jsx";

// // Create a layout component that will wrap all our pages
// // This ensures consistent layout structure across the entire application
// function RootLayout() {
//   return (
//     <div className="app-layout">
//       {/* NavBar will appear on every page */}
//       <NavBar />
//       {/* Main content area where page components will render */}
//       <main className="main-content">
//         {/* Outlet renders the matching child route */}
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// // Define our application routes
// const router = createBrowserRouter([
//   {
//     path: "/", // Root path
//     element: <RootLayout />, // Wrap all routes in our layout
//     children: [
//       // Define child routes
//       {
//         path: "/", // Home page
//         element: <HomePage />,
//       },
//       {
//         path: "/login", // Login page
//         element: <LoginPage />,
//       },
//       {
//         path: "/signup", // Signup page
//         element: <SignupPage />,
//       },
//       {
//         path: "/project/:id", // Individual project page with dynamic ID
//         element: <ProjectPage />,
//       },
//     ],
//   },
// ]);

// // Get the root element from index.html and render our application
// ReactDOM.createRoot(document.getElementById("root")).render(
//   // StrictMode helps identify potential problems in the application
//   <React.StrictMode>
//     {/* AuthProvider makes authentication state available throughout the app */}
//     <AuthProvider>
//       {/* RouterProvider enables routing functionality */}
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

// v8 CLAUDE 2//

// main.jsx
import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import pages
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

// This layout component ensures consistent structure across all pages
function RootLayout() {
  return (
    <div className="app-layout">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
