import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const login=async()=>{

    try{

      const res=
      await API.post("/auth/login",{

        email,
        password

      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    }
    catch(err){

      alert("Login Failed");

      console.log(err);

    }

  };

  return(

    <div style={{padding:"40px"}}>

      <h1>🚀 Shared Expense App</h1>

      <input

      placeholder="Email"

      value={email}

      onChange={(e)=>setEmail(e.target.value)}

      />

      <br/><br/>

      <input

      type="password"

      placeholder="Password"

      value={password}

      onChange={(e)=>setPassword(e.target.value)}

      />

      <br/><br/>

      <button onClick={login}>

      Login

      </button>

      <br/><br/>

      <button
      onClick={()=>navigate("/register")}
      >

      Register

      </button>

    </div>

  );

}

export default Login;