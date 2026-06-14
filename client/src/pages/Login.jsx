import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto"
      }}
    >

      <h1>🔐 Login</h1>

      <input
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-100"
        onClick={login}
      >
        Login
      </button>

      <br/><br/>

      <button
        className="btn btn-secondary w-100"
        onClick={()=>navigate("/register")}
      >
        Register
      </button>

    </div>

  );

}

export default Login;