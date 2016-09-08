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

| Name | Hint | Group |
|---|---|---|
| ADD | Vector Arithmetic Add | Math Operators |
| DIV | Vector Arithmetic Div | Math Operators |
| MAX | Highest value over a specified period | Math Operators |
| MAXINDEX | Index of highest value over a specified period | Math Operators |
| MIN | Lowest value over a specified period | Math Operators |
| MININDEX | Index of lowest value over a specified period | Math Operators |
| MINMAX | Lowest and highest values over a specified period | Math Operators |
| MINMAXINDEX | Indexes of lowest and highest values over a specified period | Math Operators |
| MULT | Vector Arithmetic Mult | Math Operators |
| SUB | Vector Arithmetic Substraction | Math Operators |
| SUM | Summation | Math Operators |
| ACOS | Vector Trigonometric ACos | Math Transform |
| ASIN | Vector Trigonometric ASin | Math Transform |
| ATAN | Vector Trigonometric ATan | Math Transform |
| CEIL | Vector Ceil | Math Transform |
| COS | Vector Trigonometric Cos | Math Transform |
| COSH | Vector Trigonometric Cosh | Math Transform |
| EXP | Vector Arithmetic Exp | Math Transform |
| FLOOR | Vector Floor | Math Transform |
| LN | Vector Log Natural | Math Transform |
| LOG10 | Vector Log10 | Math Transform |
| SIN | Vector Trigonometric Sin | Math Transform |
| SINH | Vector Trigonometric Sinh | Math Transform |
| SQRT | Vector Square Root | Math Transform |
| TAN | Vector Trigonometric Tan | Math Transform |
| TANH | Vector Trigonometric Tanh | Math Transform |
| ACCBANDS | Acceleration Bands | Overlap Studies |
| BBANDS | Bollinger Bands | Overlap Studies |
| DEMA | Double Exponential Moving Average | Overlap Studies |
| EMA | Exponential Moving Average | Overlap Studies |
| HT_TRENDLINE | Hilbert Transform - Instantaneous Trendline | Overlap Studies |
| KAMA | Kaufman Adaptive Moving Average | Overlap Studies |
| MA | Moving average | Overlap Studies |
| MAMA | MESA Adaptive Moving Average | Overlap Studies |
| MAVP | Moving average with variable period | Overlap Studies |
| MIDPOINT | MidPoint over period | Overlap Studies |
| MIDPRICE | Midpoint Price over period | Overlap Studies |
| SAR | Parabolic SAR | Overlap Studies |
| SAREXT | Parabolic SAR - Extended | Overlap Studies |
| SMA | Simple Moving Average | Overlap Studies |
| T3 | Triple Exponential Moving Average (T3) | Overlap Studies |
| TEMA | Triple Exponential Moving Average | Overlap Studies |
| TRIMA | Triangular Moving Average | Overlap Studies |
| WMA | Weighted Moving Average | Overlap Studies |
| ATR | Average True Range | Volatility Indicators |
| NATR | Normalized Average True Range | Volatility Indicators |
| TRANGE | True Range | Volatility Indicators |
| ADX | Average Directional Movement Index | Momentum Indicators |
| ADXR | Average Directional Movement Index Rating | Momentum Indicators |
| APO | Absolute Price Oscillator | Momentum Indicators |
| AROON | Aroon | Momentum Indicators |
| AROONOSC | Aroon Oscillator | Momentum Indicators |
| BOP | Balance Of Power | Momentum Indicators |
| CCI | Commodity Channel Index | Momentum Indicators |
| CMO | Chande Momentum Oscillator | Momentum Indicators |
| DX | Directional Movement Index | Momentum Indicators |
| IMI | Intraday Momentum Index | Momentum Indicators |
| MACD | Moving Average Convergence/Divergence | Momentum Indicators |
| MACDEXT | MACD with controllable MA type | Momentum Indicators |
| MACDFIX | Moving Average Convergence/Divergence Fix 12/26 | Momentum Indicators |
| MFI | Money Flow Index | Momentum Indicators |
| MINUS_DI | Minus Directional Indicator | Momentum Indicators |
| MINUS_DM | Minus Directional Movement | Momentum Indicators |
| MOM | Momentum | Momentum Indicators |
| PLUS_DI | Plus Directional Indicator | Momentum Indicators |
| PLUS_DM | Plus Directional Movement | Momentum Indicators |
| PPO | Percentage Price Oscillator | Momentum Indicators |
| ROC | Rate of change : ((price/prevPrice)-1)*100 | Momentum Indicators |
| ROCP | Rate of change Percentage: (price-prevPrice)/prevPrice | Momentum Indicators |
| ROCR | Rate of change ratio: (price/prevPrice) | Momentum Indicators |
| ROCR100 | Rate of change ratio 100 scale: (price/prevPrice)*100 | Momentum Indicators |
| RSI | Relative Strength Index | Momentum Indicators |
| STOCH | Stochastic | Momentum Indicators |
| STOCHF | Stochastic Fast | Momentum Indicators |
| STOCHRSI | Stochastic Relative Strength Index | Momentum Indicators |
| TRIX | 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA | Momentum Indicators |
| ULTOSC | Ultimate Oscillator | Momentum Indicators |
| WILLR | Williams' %R | Momentum Indicators |
| HT_DCPERIOD | Hilbert Transform - Dominant Cycle Period | Cycle Indicators |
| HT_DCPHASE | Hilbert Transform - Dominant Cycle Phase | Cycle Indicators |
| HT_PHASOR | Hilbert Transform - Phasor Components | Cycle Indicators |
| HT_SINE | Hilbert Transform - SineWave | Cycle Indicators |
| HT_TRENDMODE | Hilbert Transform - Trend vs Cycle Mode | Cycle Indicators |
| AD | Chaikin A/D Line | Volume Indicators |
| ADOSC | Chaikin A/D Oscillator | Volume Indicators |
| OBV | On Balance Volume | Volume Indicators |
| CDL2CROWS | Two Crows | Pattern Recognition |
| CDL3BLACKCROWS | Three Black Crows | Pattern Recognition |
| CDL3INSIDE | Three Inside Up/Down | Pattern Recognition |
| CDL3LINESTRIKE | Three-Line Strike  | Pattern Recognition |
| CDL3OUTSIDE | Three Outside Up/Down | Pattern Recognition |
| CDL3STARSINSOUTH | Three Stars In The South | Pattern Recognition |
| CDL3WHITESOLDIERS | Three Advancing White Soldiers | Pattern Recognition |
| CDLABANDONEDBABY | Abandoned Baby | Pattern Recognition |
| CDLADVANCEBLOCK | Advance Block | Pattern Recognition |
| CDLBELTHOLD | Belt-hold | Pattern Recognition |
| CDLBREAKAWAY | Breakaway | Pattern Recognition |
| CDLCLOSINGMARUBOZU | Closing Marubozu | Pattern Recognition |
| CDLCONCEALBABYSWALL | Concealing Baby Swallow | Pattern Recognition |
| CDLCOUNTERATTACK | Counterattack | Pattern Recognition |
| CDLDARKCLOUDCOVER | Dark Cloud Cover | Pattern Recognition |
| CDLDOJI | Doji | Pattern Recognition |
| CDLDOJISTAR | Doji Star | Pattern Recognition |
| CDLDRAGONFLYDOJI | Dragonfly Doji | Pattern Recognition |
| CDLENGULFING | Engulfing Pattern | Pattern Recognition |
| CDLEVENINGDOJISTAR | Evening Doji Star | Pattern Recognition |
| CDLEVENINGSTAR | Evening Star | Pattern Recognition |
| CDLGAPSIDESIDEWHITE | Up/Down-gap side-by-side white lines | Pattern Recognition |
| CDLGRAVESTONEDOJI | Gravestone Doji | Pattern Recognition |
| CDLHAMMER | Hammer | Pattern Recognition |
| CDLHANGINGMAN | Hanging Man | Pattern Recognition |
| CDLHARAMI | Harami Pattern | Pattern Recognition |
| CDLHARAMICROSS | Harami Cross Pattern | Pattern Recognition |
| CDLHIGHWAVE | High-Wave Candle | Pattern Recognition |
| CDLHIKKAKE | Hikkake Pattern | Pattern Recognition |
| CDLHIKKAKEMOD | Modified Hikkake Pattern | Pattern Recognition |
| CDLHOMINGPIGEON | Homing Pigeon | Pattern Recognition |
| CDLIDENTICAL3CROWS | Identical Three Crows | Pattern Recognition |
| CDLINNECK | In-Neck Pattern | Pattern Recognition |
| CDLINVERTEDHAMMER | Inverted Hammer | Pattern Recognition |
| CDLKICKING | Kicking | Pattern Recognition |
| CDLKICKINGBYLENGTH | Kicking - bull/bear determined by the longer marubozu | Pattern Recognition |
| CDLLADDERBOTTOM | Ladder Bottom | Pattern Recognition |
| CDLLONGLEGGEDDOJI | Long Legged Doji | Pattern Recognition |
| CDLLONGLINE | Long Line Candle | Pattern Recognition |
| CDLMARUBOZU | Marubozu | Pattern Recognition |
| CDLMATCHINGLOW | Matching Low | Pattern Recognition |
| CDLMATHOLD | Mat Hold | Pattern Recognition |
| CDLMORNINGDOJISTAR | Morning Doji Star | Pattern Recognition |
| CDLMORNINGSTAR | Morning Star | Pattern Recognition |
| CDLONNECK | On-Neck Pattern | Pattern Recognition |
| CDLPIERCING | Piercing Pattern | Pattern Recognition |
| CDLRICKSHAWMAN | Rickshaw Man | Pattern Recognition |
| CDLRISEFALL3METHODS | Rising/Falling Three Methods | Pattern Recognition |
| CDLSEPARATINGLINES | Separating Lines | Pattern Recognition |
| CDLSHOOTINGSTAR | Shooting Star | Pattern Recognition |
| CDLSHORTLINE | Short Line Candle | Pattern Recognition |
| CDLSPINNINGTOP | Spinning Top | Pattern Recognition |
| CDLSTALLEDPATTERN | Stalled Pattern | Pattern Recognition |
| CDLSTICKSANDWICH | Stick Sandwich | Pattern Recognition |
| CDLTAKURI | Takuri (Dragonfly Doji with very long lower shadow) | Pattern Recognition |
| CDLTASUKIGAP | Tasuki Gap | Pattern Recognition |
| CDLTHRUSTING | Thrusting Pattern | Pattern Recognition |
| CDLTRISTAR | Tristar Pattern | Pattern Recognition |
| CDLUNIQUE3RIVER | Unique 3 River | Pattern Recognition |
| CDLUPSIDEGAP2CROWS | Upside Gap Two Crows | Pattern Recognition |
| CDLXSIDEGAP3METHODS | Upside/Downside Gap Three Methods | Pattern Recognition |
| BETA | Beta | Statistic Functions |
| CORREL | Pearson's Correlation Coefficient (r) | Statistic Functions |
| LINEARREG | Linear Regression | Statistic Functions |
| LINEARREG_ANGLE | Linear Regression Angle | Statistic Functions |
| LINEARREG_INTERCEPT | Linear Regression Intercept | Statistic Functions |
| LINEARREG_SLOPE | Linear Regression Slope | Statistic Functions |
| STDDEV | Standard Deviation | Statistic Functions |
| TSF | Time Series Forecast | Statistic Functions |
| VAR | Variance | Statistic Functions |
| AVGPRICE | Average Price | Price Transform |
| AVGDEV | Average Deviation | Price Transform |
| MEDPRICE | Median Price | Price Transform |
| TYPPRICE | Typical Price | Price Transform |
| WCLPRICE | Weighted Close Price | Price Transform |
