function detectAnomalies(rows){

const anomalies=[];

const seen=new Set();

rows.forEach((row,index)=>{

//duplicate

const key=
JSON.stringify(row);

if(seen.has(key)){

anomalies.push({

row:index+1,

type:"Duplicate",

action:"Needs Approval"

});

}
else{

seen.add(key);

}

//negative

if(Number(row.amount)<0){

anomalies.push({

row:index+1,

type:"Negative Amount",

action:"Treat as Refund"

});

}

//missing

if(!row.amount){

anomalies.push({

row:index+1,

type:"Missing Amount",

action:"Skip"

});

}

//currency

if(
row.currency &&
row.currency!="INR" &&
row.currency!="USD"
){

anomalies.push({

row:index+1,

type:"Invalid Currency",

action:"Skip"

});

}

});

return anomalies;

}

module.exports={
detectAnomalies
};