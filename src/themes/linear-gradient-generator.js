var ReactART = require('../require-react-art').ART;
var LinearGradient = ReactART.LinearGradient;
var clone = require('clone');

function gr(options) {
	var opts = clone(options);
	if(!opts.gradientTransform)
		return new LinearGradient(options.stops, opts.x1, opts.y1, opts.x2, opts.y2);	
	if(opts.gradientTransform.length == 6) {
		var m = opts.gradientTransform;
		xyToFloats(opts);
		opts.x1 = opts.x1 * m[0] + m[4];
		opts.y1 = opts.y1 * m[3] + m[5];
		opts.x2 = opts.x2 * m[0] + m[4];
		opts.y2 = opts.y2 * m[3] + m[5];
	}
	else if(opts.gradientTransform.length == 2) {
		var m = opts.gradientTransform;
		xyToFloats(opts);
		opts.x1 = opts.x1 + m[0];
		opts.y1 = opts.y1 + m[1];
		opts.x2 = opts.x2 + m[0];
		opts.y2 = opts.y2 + m[1];
	}
		
	return new LinearGradient(options.stops, opts.x1, opts.y1, opts.x2, opts.y2);
}

function xyToFloats(opts) {
	opts.x1 = parseFloat(opts.x1);
	opts.y1 = parseFloat(opts.y1);
	opts.x2 = parseFloat(opts.x2);
	opts.y2 = parseFloat(opts.y2);
}
module.exports = gr;