const fs=require("fs");

const csv=require("csv-parser");

const importFile=(path,callback)=>{

let rows=[];

fs.createReadStream(path)

.pipe(csv())

.on("data",(data)=>{

rows.push(data);

})

.on("end",()=>{

callback(null,{

message:"CSV Parsed Successfully",

totalRows:rows.length,

data:rows

});

})

.on("error",(err)=>{

callback(err);

});

};

module.exports={

importFile

};