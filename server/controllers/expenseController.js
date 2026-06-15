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


const getExpenses = (req, res) => {

  const { groupId } = req.params;

  expenseModel.getExpensesByGroup(
    groupId,
    (err, result) => {

      if (err) {
        return res.status(500).json({
          message: "Database Error"
        });
      }

      res.status(200).json(result);

    }
  );

};


const deleteExpense = (req, res) => {

  const { id } = req.params;

  expenseModel.deleteExpense(id, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Delete failed"
      });
    }

    res.json({
      message: "Expense deleted"
    });

  });

};


const updateExpense = (req,res)=>{

const{id}=req.params;

expenseModel.updateExpense(

id,

req.body,

(err)=>{

if(err){

return res.status(500).json({

message:"Update failed"

});

}

res.json({

message:"Expense updated"

});

}

);

};

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense
};