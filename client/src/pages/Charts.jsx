import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function Charts(){

const data={

labels:["Food","Travel","Rent","Shopping"],

datasets:[

{

label:"Expenses",

data:[1200,800,5000,1500]

}

]

};

return(

<div className="container mt-4">

<h2>Expense Chart</h2>

<Bar data={data}/>

</div>

);

}

export default Charts;