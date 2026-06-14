const balanceService = require("../services/balanceService");

const getSettlement = async (req, res) => {

  try {

    const groupId = req.params.groupId;

    const result =
      await balanceService.calculateSettlement(groupId);

    res.json(result);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

module.exports = {
  getSettlement
};