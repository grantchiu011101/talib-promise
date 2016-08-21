var talib = require('../') ;
var _ = require( 'underscore') ;


var aryClose = _.chain(_.range(40)).map(function(data) { return data ; }).value() ;

// console.log( aryClose) ;

talib.execute({
	name: "SMA",
	startIdx: 0,
	// endIdx: aryClose.length - 1,
	inReal: aryClose ,

	optInTimePeriod: 9
}).then(function(data) {
	console.log ( data) ;
}).catch ( function(e) {
	console.error (e) ;
});