import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import "./NavBar.css";

function NavBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          MentHub
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="nav-right">
        {auth.token ? (
          <>
            <Link to="/create-project" className="nav-link">
              Create Project
            </Link>
            <button onClick={handleLogout} className="nav-link logout-button">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link signup-button">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
