// import LoginForm from "../components/LoginForm";

// function LoginPage() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <LoginForm />
//     </div>
//   );
// }

// export default LoginPage;

/// V2 ///
// import { useState } from "react";
// import { useAuth } from "../hooks/use-auth";
// import { postLogin } from "../api/post-login";
// import "./LoginPage.css";

// function LoginPage() {
//   const { setAuth } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await postLogin(username, password);
//     if (token) {
//       setAuth({ token });
//       window.localStorage.setItem("token", token);
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginPage;

// v3 //
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
