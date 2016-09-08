# talib-promise
talib promisify module

```
talib.execute({
	name: "SMA",
	startIdx: 0,
	endIdx: marketData.close.length - 1,
	inReal: marketData.close,
	optInTimePeriod: 9
}).then(function(data) {
	// data ready here
}).catch ( function (err){
	// catch error exception here
}) ;
```
