import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {

    try {

      const res = await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Registration Successful!");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <div
      style={{
        padding: "40px",
        maxWidth: "400px",
        margin: "auto"
      }}
    >

      <h1>📝 Register</h1>

      <input
        className="form-control mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-100"
        onClick={register}
      >
        Register
      </button>

      <br />
      <br />

      <button
        className="btn btn-secondary w-100"
        onClick={() => navigate("/")}
      >
        Back to Login
      </button>

    </div>

  );

}

export default Register;