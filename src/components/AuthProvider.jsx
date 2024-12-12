// import { createContext, useState } from "react";

// // Here we create the Context
// export const AuthContext = createContext();

// // Here we create the component that will wrap our app, this means all it children can access the context using are hook.
// export const AuthProvider = (props) => {
//   // Using a object for the state here, this way we can add more properties to the state later on like user id.
//   const [auth, setAuth] = useState({
//     // Here we initialize the context with the token from local storage, this way if the user refreshes the page we can still have the token in memory.
//     token: window.localStorage.getItem("token"),
//   });

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

/// v3 ///

// import { createContext, useState, useEffect } from "react";

// // Create Auth Context
// export const AuthContext = createContext();

// // AuthProvider Component
// export const AuthProvider = (props) => {
//   // Add 'userId' or other user data to the auth state
//   const [auth, setAuth] = useState({
//     token: window.localStorage.getItem("token"),
//     userId: null, // Placeholder for additional user data
//   });

//   // Synchronize token from localStorage
//   useEffect(() => {
//     const token = window.localStorage.getItem("token");
//     if (token) {
//       setAuth((prev) => ({ ...prev, token }));
//     }
//   }, []);

//   // Optional logout function
//   const logout = () => {
//     window.localStorage.removeItem("token");
//     setAuth({ token: null, userId: null }); // Reset all auth state
//   };

//   return (
//     <AuthContext.Provider value={{ auth, setAuth, logout }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// v4 //
import { createContext, useState } from "react";

// Here we create the Context
export const AuthContext = createContext();

// Here we create the component that will wrap our app, this means all it children can access the context using are hook.
export const AuthProvider = (props) => {
  // Using a object for the state here, this way we can add more properties to the state later on like user id.
  const [auth, setAuth] = useState({
    // Here we initialize the context with the token from local storage, this way if the user refreshes the page we can still have the token in memory.
    token: window.localStorage.getItem("token"),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
