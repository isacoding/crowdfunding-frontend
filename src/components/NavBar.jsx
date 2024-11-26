// import { Link, Outlet } from "react-router-dom";

// function NavBar() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// export default NavBar;

import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/">Project</Link>
        <Link to="/">Contact</Link> */}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
