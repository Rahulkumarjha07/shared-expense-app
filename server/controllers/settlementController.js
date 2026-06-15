const balanceService = require("../services/balanceService");

const getSettlement = (req, res) => {

  const groupId = req.params.groupId;

  balanceService.calculateBalance(groupId, (err, balances) => {

    if (err) {
      return res.status(500).json({
        message: err.message
      });
    }

    const debtors = [];
    const creditors = [];

    balances.forEach((u) => {

      if (u.net_balance < 0) {

        debtors.push({
          name: u.name,
          amount: Math.abs(u.net_balance)
        });

      } else if (u.net_balance > 0) {

        creditors.push({
          name: u.name,
          amount: u.net_balance
        });

      }

    });

    const result = [];

    let i = 0;
    let j = 0;

    while (i < debtors.length && j < creditors.length) {

      const amt = Math.min(
        debtors[i].amount,
        creditors[j].amount
      );

      result.push({
        from: debtors[i].name,
        to: creditors[j].name,
        amount: amt.toFixed(2)
      });

      debtors[i].amount -= amt;
      creditors[j].amount -= amt;

      if (debtors[i].amount <= 0) i++;
      if (creditors[j].amount <= 0) j++;

    }

    res.json(result);

  });

};

module.exports = {
  getSettlement
};