var React = require('react');
var Text = require('../require-react-art').ART.Text;
var _ = require('underscore');
var EntityMixin = {
	renderDescriptions: function(style, height, marginTop) {
		var descriptions = this.props.descriptions;		
		var x = 0;				
		var fill = style.color;
		var entityId = this.props.id ? this.entityId: Math.random();
		var font = _.extend({}, DEFAULTFONT);		
		if(typeof descriptions == 'string') {
			var y = 0;
			return <Text x={x} y={y} fill={fill} font={fontString(font)} alignment="center">{descriptions}</Text>
		}
		else if (isArray(descriptions)) {
			marginTop = marginTop || MARGINTOP[descriptions.length];
			var starty = -height / 2 + marginTop;
			var font = DEFAULTFONT;
			if(descriptions.length >=5) {
				font = _.extend({}, font);
				font.fontSize = '11px';
			}

			var texts = descriptions.map(function(des, idx) {
				y = starty + idx * LINEHEIGHT;				
				return <Text key={this.props.key+'-desc-'+idx} x={x} y={y} fill={fill} font={fontString(font)} alignment="center">{des}</Text>
			}, this);			
			return texts;
		}
			
	}
}
var fontString = function(font) {
	return font.fontWeight + ' ' + font.fontSize + ' ' + font.fontFamily;
}

function isArray(obj) {
	return  Object.prototype.toString.call(obj) === '[object Array]';
}
module.exports = EntityMixin;

var MARGINTOP = [];
MARGINTOP[2] = 30;
MARGINTOP[3] = 20;
MARGINTOP[4] = 15;
MARGINTOP[5] = 10;

var LINEHEIGHT = 15;

var DEFAULTFONT = {
	fontSize: '13px',
	fontWeight: 'bold',
	fontFamily: 'Moderna'
}
//<Text x={x} y={80} fill="#D97B76" alignment="center" font={font}>{sys.name}</Text>