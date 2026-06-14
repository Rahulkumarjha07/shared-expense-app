const balanceService =
require("../services/balanceService");

const getBalance=(req,res)=>{

    const groupId=req.params.groupId;

    balanceService.calculateBalance(
        groupId,
        (err,data)=>{

            if(err){

                return res.status(500).json({

                    message:"Balance calculation failed"

                });

            }

            res.status(200).json(data);

        }
    );

};

module.exports={
    getBalance
};