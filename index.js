var talib = require("talib");
var Promise = require("bluebird");
var _ = require("underscore");

module.exports = {
	execute: function (params) {
		return new Promise(function(resolve, reject) {
			talib.execute(params, function (data) {
				if ( _.has(data, "error")) {
					reject(data["error"]) ;
				} else {
					resolve(data)
				}
				// console.log(util.inspect(data, true, 7));
				// console.log ( _.isEmpty(data.result.outReal)) ;
				// console.log ( data.result.outReal) ;
			});
		});
	},
	explain: function(func) {
		return new Promise ( function( resolve, reject) {
			var explain = talib.explain( func) ;
			resolve ( explain) ;
		}) ;
	}
	
} ;