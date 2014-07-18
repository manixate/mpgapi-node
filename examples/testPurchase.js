var mpgApi = require('../index.js');

function testPurchase(storeId, apiToken, custId, orderId, amount, pan, expiryDate, cryptType, dynamicDescriptor, statusCheck) {

    var purchase = {
		cust_id: custId,
		order_id: orderId,
		amount: amount,
		pan: pan,
		expiry_date: expiryDate,
		crypt_type: cryptType,
		dynamic_descriptor: dynamicDescriptor,
		status_check: statusCheck
    };

    mpgApi.post(storeId, apiToken, 'purchase', purchase, function (err, result) {
    	console.log("CardType = " + result.CardType);
		console.log("TransAmount = " + result.TransAmount);
		console.log("TxnNumber = " + result.TxnNumber);
		console.log("ReceiptId = " + result.ReceiptId);
		console.log("TransType = " + result.TransType);
		console.log("ReferenceNum = " + result.ReferenceNum);
		console.log("ResponseCode = " + result.ResponseCode);
		console.log("ISO = " + result.ISO);
		console.log("Message = " + result.Message);
		console.log("IsVisaDebit = " + result.IsVisaDebit);
		console.log("AuthCode = " + result.AuthCode);
		console.log("Complete = " + result.Complete);
		console.log("TransDate = " + result.TransDate);
		console.log("TransTime = " + result.TransTime);
		console.log("Ticket = " + result.Ticket);
		console.log("TimedOut = " + result.TimedOut);
		console.log("StatusCode = " + result.StatusCode);
		console.log("StatusMessage = " + result.StatusMessage);
    });
}

module.exports = testPurchase;