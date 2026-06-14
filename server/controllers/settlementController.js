const settlementService =
require("../services/settlementService");

const getSettlement = (req, res) => {

    const groupId = req.params.groupId;

    settlementService.generateSettlements(
        groupId,
        (err, data) => {

            if (err) {

                return res.status(500).json({
                    message: "Settlement failed"
                });

            }

            res.status(200).json(data);

        }
    );

};

module.exports = {
    getSettlement
};