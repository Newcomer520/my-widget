var linearGradientGenerator = require('./linear-gradient-generator');

var bgOption = {
	x1: 230.41476,
	y1: 486.43118,
	x2: 446.04544 - 70,
	y2: 486.43118,
	stops: {
		"0": "#ccff00",
		"0.51249784": "#ffffff",
		"1": "#ccff00"
	},
	gradientTransform: [-242.54186,-246.58423]

/*
x1="230.41476"
       y1="486.43118"
       x2="446.04544"
       y2="486.43118"
<stop
         id="stop4909"
         offset="0"
         style="stop-color:#ccff00;stop-opacity:1" />
      <stop
         id="stop4907"
         offset="0.51249784"
         style="stop-color:#ffffff;stop-opacity:1" />
      <stop
         style="stop-color:#ccff00;stop-opacity:1"
         offset="1"
         id="stop4903" /
*/
};

module.exports = linearGradientGenerator(bgOption);