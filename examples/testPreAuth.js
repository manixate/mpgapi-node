var mpgApi = require('../index.js');

function preAuth(storeId, apiToken, orderId, amount, pan, expDate, cryptType) {
	var preAuth = {
		order_id: orderId,
		amount: amount,
		pan: pan,
		expdate: expDate,
		crypt_type: cryptType
	};

	mpgApi.post(storeId, apiToken, 'preauth', preAuth, function (err, result) {
		console.log("CardType = " + result.CardType);
	    console.log("TransAmount = " + result.TransAmount);
	    console.log("TxnNumber = " + result.TxnNumber);
	    console.log("ReceiptId = " + result.ReceiptId);
	    console.log("TransType = " + result.TransType);
	    console.log("ReferenceNum = " + result.ReferenceNum);
	    console.log("ResponseCode = " + result.ResponseCode);
	    console.log("ISO = " + result.ISO);
	    console.log("BankTotals = " + result.BankTotals);
	    console.log("Message = " + result.Message);
	    console.log("AuthCode = " + result.AuthCode);
	    console.log("Complete = " + result.Complete);
	    console.log("TransDate = " + result.TransDate);
	    console.log("TransTime = " + result.TransTime);
	    console.log("Ticket = " + result.Ticket);
	    console.log("TimedOut = " + result.TimedOut);
	    console.log("MessageId = " + result.MessageId);
	    console.log("IsVisaDebit = " + result.IsVisaDebit);
	});
}

module.exports = preAuth;