import {useEffect,useState} from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function SettlementHistory(){

const[data,setData]=useState([]);

const load=async()=>{

try{

const res=
await API.get("/settlement-history");

setData(res.data);

}
catch(err){

console.log(err);

}

};

useEffect(()=>{

load();

},[]);

return(

<Layout>

<h2>Settlement History</h2>

<table className="table table-bordered">

<thead>

<tr>

<th>Payer</th>

<th>Receiver</th>

<th>Amount</th>

<th>Date</th>

</tr>

</thead>

<tbody>

{data.map((d,i)=>(

<tr key={i}>

<td>{d.payer}</td>

<td>{d.receiver}</td>

<td>₹{d.amount}</td>

<td>{d.created_at}</td>

</tr>

))}

</tbody>

</table>

</Layout>

);

}

export default SettlementHistory;