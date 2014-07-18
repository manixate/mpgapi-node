var mpgApi = require('../index.js');
var _ = require('underscore');

function testOpenTotals(storeId, apiToken, ecrNumber) {

    var openTotals = {
    	// type: 'opentotals',
    	ecr_number: ecrNumber
    };

    mpgApi.post(storeId, apiToken, 'opentotals', openTotals, function (err, result) {
    	_.each(result.banktotals, function (bankTotal) {
            _.each(bankTotal.ecr.card, function (card) {
                if (card.cardtype === undefined)
                    return;

                console.log("Card type = " + x.cardtype);
                console.log("Purchase Count = " + x.purchase.count);
                console.log("Purchase Amount = " + x.purchase.amount);
                console.log("Refund Count = " + x.refund.count);
                console.log("Refund Amount = " + x.refund.amount);
                console.log("Correction Count = " + x.correction.count);
                console.log("Correction Amount = " + x.correction.amount);
            });
        });
    });
}

module.exports = testOpenTotals;

// var storeId = "store5";
// var apiToken = "yesguy";

// testOpenTotals(storeId, apiToken, '66002163');