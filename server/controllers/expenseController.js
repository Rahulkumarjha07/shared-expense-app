const expenseModel = require("../models/expenseModel");

const createExpense = (req, res) => {

    const data = req.body;

    if(
        !data.group_id ||
        !data.title ||
        !data.amount ||
        !data.paid_by ||
        !data.expense_date ||
        !data.split_type ||
        !data.participants
    ){
        return res.status(400).json({
            message:"Required fields missing"
        });
    }

    expenseModel.createExpense(data,(err,result)=>{

        if(err){
            return res.status(500).json({
                message:"Expense creation failed"
            });
        }

        const expenseId=result.insertId;

        // Equal Split
        if(data.split_type==="EQUAL"){

            const share=
            data.amount/
            data.participants.length;

            data.participants.forEach(user=>{

                expenseModel.addExpenseShare(

                    expenseId,
                    user,
                    share,
                    ()=>{}

                );

            });

        }

        return res.status(201).json({

            message:"Expense created",

            expenseId

        });

    });

};

module.exports={
    createExpense
};