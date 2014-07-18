var mpgApi = require('../index.js');

var storeId = "store5";
var apiToken = "yesguy";

var cardVerification = {
	order_id: 'cardverify4',
	pan: '4242424242424242',
	expdate: '1009',
	crypt_type: '7'
};

mpgApi.post(storeId, apiToken,'card_verification', cardVerification, function (err, result) {
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