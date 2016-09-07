var talib = require('../index') ;
var should = require('should') ;
var _ = require( 'underscore') ;
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));


describe('talib', function() {

	describe( 'version', function() {
		(talib.version).should.be.instanceOf(String) ;
	}) ;

	describe ( 'functions', function() {
		(talib.functions).should.be.instanceOf(Array).and.have.lengthOf(161) ;
	}) ;


	describe('explain', function() {
		it('ADX', function() {
			talib.explain("ADX")
			.then(function(data) {
				// console.log ( data) ;
				data.should.have.keys('name', 'group', 'hint', 'inputs', 'outputs') ;
			})
		});
	});

	describe('exec', function() {
		this.timeout(5000) ;
		var marketData ;

		beforeEach ( function(done) {
			request({
				url:"https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?api_key=szyWkzXs-6NdmeWNDhBg&start_date=2016-06-01&end_date=2016-08-31",
				json: true
			})
			.then(function(res) {
				
				var result = _.chain(res.body.dataset.data).map(function(val) {
					return _.object(this.column_names, val) ;
				}, {column_names: res.body.dataset.column_names}).value() ;
				marketData = result ;
				done() ;
			}) ;
		}) ;

		it('ADX' , function() {
			talib.execute({
				name: "ADX",
				startIdx: 0,
				endIdx: marketData.length - 1,
				high: _.chain(marketData).map(function(data) {return data.Close ;}).value(),
				low: _.chain(marketData).map(function(data) {return data.Low ;}).value(),
				close: _.chain(marketData).map(function(data) {return data.Close ;}).value(),
				optInTimePeriod: 9
			}).then(function(data) {
				(data).should.have.keys('result', 'begIndex', 'nbElement') ;
				(data.result).should.have.property('outReal').with.length(data.nbElement) ;

			});
			
		}) ;

		it("SMA", function() {
			talib.execute({
				name: "SMA",
				startIdx: 0,
				endIdx: marketData.length - 1,
				inReal: _.chain(marketData).map(function(data) {return data.Close ;}).value(),
				optInTimePeriod: 9
			}).then(function(data) {
				(data).should.have.keys('result', 'begIndex', 'nbElement') ;
				(data.result).should.have.property('outReal').with.length(data.nbElement) ;
			})
		})
	}) ;

	
});


