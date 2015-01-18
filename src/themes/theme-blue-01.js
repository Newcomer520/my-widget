var ReactART = require('../require-react-art').ART;
var linearGradientGenerator = require('./linear-gradient-generator');
var ActiveBg = require('./active-bg');

var dirLGOpt1 = {	
    x1: 192.68604,
    y1: 459.48209, 
    x2: 192.68604,
    y2: 101.0591,
    stops: {
    	"0":'#002255',
	    "0.67105263": '#162d50',
	    "0.89098352": '#5599ff',
	    "1": '#aaccff'	
    },
    gradientTransform: [1.1227654,0,0,1.0005433,-116.16866,-173.58912]	
};
var	dirLGOpt2 = {	
    x1: "229.06731",
    y1: 479.69391,
    x2: "229.06731",
    y2: 21.559277,
    stops: {
    	"0":'#002255',
	    "0.32941177": '#162d50',
	    "0.66764706": '#3771c8',
	    "1": '#aaccff'	
    },
    gradientTransform: [1.1227654,0,0,1.0005433,-116.16866,-173.58912]
};

var bgLGOpt = {
	x1: "230.41476",
	y1: "486.43118",
	x2: 446.04544-70,//offset
	y2: "486.43118",
	stops: {
		"0": '#5599ff',
		"0.51249784": "#ffffff",
		"1": '5599ff'
	},
	gradientTransform: [-245.23677,-249.27914]

	/*       x1="230.41476"
       y1="486.43118"
       x2="446.04544"
       y2="486.43118"
<stop
         id="stop4909"
         offset="0"
         style="stop-color:#5599ff;stop-opacity:1" />
      <stop
         id="stop4907"
         offset="0.51249784"
         style="stop-color:#ffffff;stop-opacity:1" />
      <stop
         style="stop-color:#5599ff;stop-opacity:1"
         offset="1"
         id="stop4903" />

       */

}

var theme = {
	stroke: '#002842',
	strokeWidth: '3',
	fill: linearGradientGenerator(bgLGOpt),
    fillActive: ActiveBg,
	title: {
		color: '#f5faed',
		fill: '#003380'
	},
	dir:{
		color: '#f5faed',
		colorHover: '#0c05df',
		fill1: linearGradientGenerator(dirLGOpt1),
		fill2: linearGradientGenerator(dirLGOpt2)
	} 
}

module.exports = theme;