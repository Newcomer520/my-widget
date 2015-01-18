var ReactART = require('../require-react-art').ART;
var linearGradientGenerator = require('./linear-gradient-generator');
var ActiveBg = require('./active-bg');


var dirLGOpt1 = {	
    x1: "192.68604",
    y1: "459.48209",
    x2: "192.68604",
    y2: "101.0591",
    stops: {
    	"0":'#005500',
	    "0.67105263": '#005500',
	    "0.90225559": '#00d400',
	    "1": '#005500'	
    },
    gradientTransform: [1.1227654,0,0,1.0005433,-114.96868,-174.19622]	
    /*       
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.1227654,0,0,1.0005433,-114.96868,-174.19622)" 
    */
};
var	dirLGOpt2 = {	
    x1:"229.06731",
    y1:"479.69391",
    x2:"229.06731",
    y2:"21.559277",
    stops: {
    	"0":'#164616',
	    "0.32941177": '#002b00',
	    "0.66764706": '#00d400',
	    "1": '#165016'	
    },
    gradientTransform: [1.1227654,0,0,1.0005433,-114.96868,-174.19622]
    /*
    
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.1227654,0,0,1.0005433,-114.96868,-174.19622)" />
       <stop
         style="stop-color:#164616;stop-opacity:1;"
         offset="0"
         id="stop4271" />
      <stop
         id="stop4277"
         offset="0.32941177"
         style="stop-color:#002b00;stop-opacity:1" />
      <stop
         style="stop-color:#00d400;stop-opacity:1"
         offset="0.66764706"
         id="stop4279" />
      <stop
         style="stop-color:#165016;stop-opacity:0;"
         offset="1"
         id="stop4273" />
    */
};

var bgLGOpt = {
	x1: "230.41476",
    y1: "486.43118",
    x2: 446.04544 - 70,
    y2: "486.43118",
	stops: {
		"0": '#37c837',
		"0.51249784": "#ffffff",
		"1": '#37c837'
	},
	gradientTransform: [-241.84695,-248.5931]

	/*
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-241.84695,-248.5931)"
    <stop
         id="stop4909"
         offset="0"
         style="stop-color:#37c837;stop-opacity:1" />
      <stop
         id="stop4907"
         offset="0.51249784"
         style="stop-color:#ffffff;stop-opacity:1" />
      <stop
         style="stop-color:#37c837;stop-opacity:1"
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
		fill: '#005100'
	},
	dir:{
		color: '#f5faed',
        colorHover: '#0c05df',
		fill1: linearGradientGenerator(dirLGOpt1),
		fill2: linearGradientGenerator(dirLGOpt2)
	} 
}

module.exports = theme;