const importService=require("../services/importService");

const importCSV=(req,res)=>{

if(!req.file){

return res.status(400).json({

message:"CSV file required"

});

}

importService.importFile(

req.file.path,

(err,data)=>{

if(err){

return res.status(500).json({

message:"Import failed"

});

}

res.json(data);

}

);

};

module.exports={

importCSV

};