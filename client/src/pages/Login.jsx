import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>

      <h1>🚀 Shared Expense App</h1>

      <button
        onClick={() => navigate("/dashboard")}
      >
        Login
      </button>

      <br /><br />

      <button
        onClick={() => navigate("/register")}
      >
        Register
      </button>

    </div>
  );
}

export default Login;