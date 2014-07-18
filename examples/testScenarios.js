var mpgApi = require('../index.js');
var _ = require('underscore');
var Q = require('q');

var storeId = "store5";
var apiToken = "yesguy";

var custId = "cust id";
var orderId = 'safari-' + new Date().toISOString();
var amount = '1.00';
var pan = '4242424242424242';
var expiryDate = '1111';
var cryptType = '7';

var ecrNumber = '66005372';

var purchase = {
	cust_id: custId,
	order_id: orderId,
	amount: amount,
	pan: pan,
	expdate: expiryDate,
	crypt_type: cryptType
};

// Perform purchase
var promise = mpgApi.post(storeId, apiToken, 'purchase', purchase);

promise.then(function (result) {
	print(result);

	return Q.delay(result, 0);
}, function (error) {
	console.log(error);
}).then(function (result) {
	var batchClose = {
		ecr_no: ecrNumber
	};

	return mpgApi.post(storeId, apiToken, 'batchclose', batchClose);
}).then(function (result) {
	printBatchInfo(result);
}, function (error) {
	console.log(error);
});

function print(result) {
	for (var key in result) {
        if (result.hasOwnProperty(key)) {
            console.log(key + " = " + result[key]);
        }
	}
}

function printBatchInfo(info) {
	if (info.ReceiptId == "Global Error Receipt") {
		print(info);
		return;
	}

	_.each(info.BankTotals, function (ecrs) {
		_.each(ecrs.ECR, function (ecr) {
			console.log("\nTerm ID = " + ecr.term_id[0]);

			_.each(ecr.Card, function (card) {
				console.log("Card Type = " + card.CardType);

				console.log("Purchase: Count = " + card.Purchase[0].Count[0] + "; Amount = " + card.Purchase[0].Amount[0]);
				console.log("Refund: Count = " + card.Refund[0].Count[0] + "; Amount = " + card.Refund[0].Amount[0]);
				console.log("Correction: Count = " + card.Correction[0].Count[0] + "; Amount = " + card.Correction[0].Amount[0]);
			});
		});
	});
}