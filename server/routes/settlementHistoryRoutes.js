const express=require("express");

const router=express.Router();

const{
getHistory
}=require("../controllers/settlementHistoryController");

router.get("/",getHistory);

module.exports=router;