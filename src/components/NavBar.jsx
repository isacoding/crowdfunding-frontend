// import { Link, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {auth.token ? (
//         <Link to="/" onClick={handleLogout}>
//           Log Out
//         </Link>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//       <Outlet />
//     </nav>
//   );
// }

// export default NavBar;

/// V3 ///

// import { useEffect } from "react";
// import { useAuth } from "../hooks/use-auth";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   useEffect(() => {
//     document.title = "Crowdfunding App";
//   }, []);

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {auth.token ? (
//         <Link to="/" onClick={handleLogout}>
//           Log Out
//         </Link>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//       <Outlet />
//     </nav>
//   );
// }

// export default NavBar;

/// V4 ///

// import { useEffect } from "react";
// import { Link, Outlet } from "react-router-dom"; // Import necessary components
// import { useAuth } from "../hooks/use-auth"; // Import useAuth correctly
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth(); // Destructure auth and setAuth from useAuth

//   const handleLogout = () => {
//     // Clear token and update auth state
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   useEffect(() => {
//     // Set the document title
//     document.title = "Crowdfunding App";
//   }, []);

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {auth.token ? (
//         <Link to="/" onClick={handleLogout}>
//           Log Out
//         </Link>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//       <Outlet /> {/* Render nested routes */}
//     </nav>
//   );
// }

// export default NavBar;

/// V5 ///

// import { useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   useEffect(() => {
//     document.title = "Crowdfunding App";
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/">Home</Link>
//       </div>
//       <div className="navbar-right">
//         {auth.token ? (
//           <Link to="/" onClick={handleLogout}>
//             Log Out
//           </Link>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//       <Outlet />
//     </nav>
//   );
// }

// export default NavBar;

/// v6 ///

// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         {auth.token ? (
//           <Link to="/" onClick={handleLogout}>
//             Log Out
//           </Link>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

/// v7 ///
// import { useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   useEffect(() => {
//     document.title = "Crowdfunding App";
//   }, []);

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {auth.token ? (
//         <Link to="/" onClick={handleLogout}>
//           Log Out
//         </Link>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//       <Outlet />
//     </nav>
//   );
// }

// export default NavBar;

/// v8 ///

// import { useAuth } from "../hooks/use-auth";
// import { Link, Outlet } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

/// v9 ///
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {auth.token ? (
//         <Link to="/" onClick={handleLogout}>
//           Log Out
//         </Link>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//     </nav>
//   );
// }

// export default NavBar;

/// v10 ///
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         {auth.token ? (
//           <button className="logout-button" onClick={handleLogout}>
//             Log Out
//           </button>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

// v11 //
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import "./NavBar.css";

// function NavBar() {
//   const { auth, setAuth } = useAuth();

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null });
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {auth.token ? (
//         <>
//           <Link to="/create-project">Create Project</Link> {/* Add link */}
//           <Link to="/" onClick={handleLogout}>
//             Log Out
//           </Link>
//         </>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//     </nav>
//   );
// }

// export default NavBar;

// v12 //

// import { Link } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/create-project">Create Project</Link>
//     </nav>
//   );
// }

// export default NavBar;

// v13 //
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

function NavBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {auth.token ? (
        <Link to="/" onClick={handleLogout}>
          Log Out
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Outlet />
    </nav>
  );
}

export default NavBar;
