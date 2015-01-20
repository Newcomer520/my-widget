var React = require('react');
var ReactART = require('./require-react-art').ART;
var Surface = ReactART.Surface;
var CircleEntry = require('./circle-entry.jsx');
var RectangleEntry = require('./rectangle-entry.jsx');
var CircleBlueStyle = require('./themes/blue-circle');
var CircleGreenStyle = require('./themes/green-circle');
var EllipseEntry = require('./ellipse-entry.jsx');
var Ellipse =  require('./require-react-art').Ellipse;

var CenterRegion = React.createClass({
	propTypes: {
		//in pixels
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	},
	render: function() {
		var props = this.props;
		var w = props.width;
		var h = props.height;
		return (
			<Surface width={w} height={h}>
				{this.renderCircles()}
				<Ellipse x={0} y={0} width={100} height={100} fill="#fff" />
				<RectangleEntry 
					{...cordinate(0, 0)}
					theme={require('./themes/orange-rect')}
					width={160}					
					height={65}
					descriptions={['MP1', 'Business & API', 'Management', 'Process']} />
			</Surface>
		);
	},
	renderCircles: function() {
		var Circles = [];
		CIRCLEPOSITION.forEach(function(circlesInRow, rIdx) {
			circlesInRow.forEach(function(circle, cIdx) {
				var theme = rIdx < 3 ? CircleGreenStyle: CircleBlueStyle;
				Circles.push(
					<EllipseEntry
						{...cordinate(circle.x, circle.y)} 
						width={200}
						height={100}
						radius={CRADIUS}
						descriptions={CIRCLEDESCRIPTIONS[rIdx][cIdx]}
						theme={theme}
						key={"circle-entry-"+circle.x+circle.y} />
				);
			});
		});
		return Circles;
	}

});

function cordinate(row, col) {
	row = row || 0;
	col = col || 0;


	var cords = {
		x: {
			position: CORDS.x.central,
			number: row
		},
		y: {
			position: CORDS.y.central,
			number: col
		}
	}	
	for(var c in CORDS) {
		CORDS[c].offsets.forEach(function(o, idx){
			if(Math.abs(cords[c].number) < idx)
				return;
			var sign = cords[c].number >= 0 ? 1: -1
			cords[c].position += sign * o;
		})
	}
	var ret = {
		x: cords.x.position,
		y: cords.y.position
	}
	return ret;

}



var CORDS = {
	x: {
		central: 345,
		offsets: [0, 130, 90]
	},
	y: {
		central: 190,
		offsets: [0, 65, 70, 70]	
	}
}

var CIRCLEPOSITION = [
	[{x: 0, y: -2}],
	[{x: -1, y: -1}, {x: 1, y: -1}], 
	[{x: -1, y: 1}, {x: 1, y: 1}],
	[{x: -2, y: 2}, {x: 0, y: 2}, {x: 2, y: 2}],
	[{x: -1, y: 3}, {x: 1, y: 3}]
];
var CIRCLEDESCRIPTIONS = [
	[['COP3', 'Program', 'Management', 'Process']],
	[['COP2', 'Sales &', 'Marketing', 'Process'], ['COP4', 'R & D', 'Process']], 
	[['COP6', 'Customer', 'Satisfication', 'Process'], ['COP5', 'Manufacturing', 'Process']],
	[['SP7', 'Purchasing &', 'Supplier', 'Management', 'Process'], ['SP8', 'Production', 'Management', 'Process'], ['SP9', 'Human', 'Resource', 'Process']],
	[['SP10', 'IT System', 'Management', 'Process'], ['SP11', 'Quality', 'Management', 'Process']]
];


//690: 450
module.exports = CenterRegion;

var CRADIUS = 45;

/*     
       center of x
       V
       *
    *     *
      ---    <- center of y
    *     *
  *    *    *
    *     *

*/