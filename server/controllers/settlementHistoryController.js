const settlementModel =
require("../models/settlementModel");

const getHistory = (req,res)=>{

settlementModel.getAllSettlements(

(err,result)=>{

if(err){

return res.status(500).json({

message:"Database Error"

});

}

res.json(result);

}

);

};

module.exports={

getHistory

};