const express=require("express");

const router=express.Router();

const{
getBalance
}=require("../controllers/balanceController");

router.get("/:groupId",getBalance);

module.exports=router;