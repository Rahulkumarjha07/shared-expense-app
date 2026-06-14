import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function Dashboard(){

const [stats,setStats]=useState({});

const loadStats=async()=>{

try{

const res=
await API.get("/dashboard");

setStats(res.data);

}
catch(err){

console.log(err);

}

};

useEffect(()=>{

loadStats();

},[]);

return(

<Layout>

<h2>Dashboard</h2>

<div className="row">

<div className="col-md-4">

<div className="card p-3 shadow">

<h5>Total Groups</h5>

<h2>{stats.totalGroups}</h2>

</div>

</div>

<div className="col-md-4">

<div className="card p-3 shadow">

<h5>Total Expenses</h5>

<h2>{stats.totalExpenses}</h2>

</div>

</div>

<div className="col-md-4">

<div className="card p-3 shadow">

<h5>Total Amount</h5>

<h2>{stats.totalExpenses}</h2>

</div>

</div>

</div>

</Layout>

);

}

export default Dashboard;