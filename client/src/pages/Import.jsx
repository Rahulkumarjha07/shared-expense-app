import { useState } from "react";
import API from "../services/api";

function Import(){

const[file,setFile]=useState(null);

const upload=async()=>{

const formData=new FormData();

formData.append("file",file);

try{

const res=await API.post(

"/import",

formData,

{

headers:{

"Content-Type":

"multipart/form-data"

}

}

);

alert("Imported Successfully");

console.log(res.data);

}
catch(err){

console.log(err);

}

};

return(

<div>

<h2>Import CSV</h2>

<input

type="file"

accept=".csv"

onChange={(e)=>setFile(e.target.files[0])}

/>

<br/><br/>

<button onClick={upload}>

Import

</button>

</div>

);

}

export default Import;