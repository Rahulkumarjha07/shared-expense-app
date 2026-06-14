const balanceService = require("./balanceService");

const generateSettlements = (groupId, callback) => {

    balanceService.calculateBalance(groupId, (err, balances) => {

        if (err) {
            return callback(err);
        }

        let creditors = [];
        let debtors = [];

        balances.forEach(user => {

            if (user.net_balance > 0) {
                creditors.push({
                    name: user.name,
                    amount: user.net_balance
                });
            }

            if (user.net_balance < 0) {
                debtors.push({
                    name: user.name,
                    amount: Math.abs(user.net_balance)
                });
            }

        });

        let settlements = [];

        let i = 0;
        let j = 0;

        while (i < debtors.length && j < creditors.length) {

            let pay = Math.min(
                debtors[i].amount,
                creditors[j].amount
            );

            settlements.push({

                from: debtors[i].name,

                to: creditors[j].name,

                amount: pay

            });

            debtors[i].amount -= pay;
            creditors[j].amount -= pay;

            if (debtors[i].amount === 0)
                i++;

            if (creditors[j].amount === 0)
                j++;

        }

        callback(null, settlements);

    });

};

module.exports = {
    generateSettlements
};