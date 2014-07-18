var xml2js = require('xml2js');
var request = require('request');
var util = require('util');
var Q = require('q');

var xmlBuilder = new xml2js.Builder();
xmlBuilder.options.rootName = "request";

var baseUrl = "https://esqa.moneris.com";

function post (storeId, apiToken, type, req, callback) {
	var deferred = Q.defer();

	var data = {
		store_id: storeId,
		api_token: apiToken
	};
	data[type] = req;

	data = xmlBuilder.buildObject(data);
	console.log("Sending\n" + data);

	var options = {
		uri: baseUrl + '/gateway2/servlet/MpgRequest',
		method: 'POST',
		body: data
	};

	request(options, function (error, res, body) {
		if (error) {
			console.log(error);
			return deferred.reject(error);
		}

		// Convert to JSON
		xml2js.parseString(body, function (err, result) {
			var response = result.response;
			var receipt = util.isArray(response.receipt) ?
							response.receipt[0] : response.receipt;

			return deferred.resolve(receipt);
		});
	});

	return deferred.promise.nodeify(callback);
}

module.exports.post = post;