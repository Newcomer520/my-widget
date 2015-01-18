var React = require('react');
var ReactART = require('./require-react-art').ART;
var Group = ReactART.Group;
var Shape = ReactART.Shape;
var Tt = ReactART.Text;

var SysWidget = React.createClass({
	propTypes: {
		sys: React.PropTypes.object,
		theme: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			hover: false
		}
	},
	render: function() {
		var props = this.props;
		var	scaleX = 0.18;//fixed
		var scaleY = 0.15;
		var x = props.x? +props.x : 0;
		var y = props.y? +props.y: 0;

		return (
			<Group x={x} y={y} scaleX={scaleX} scaleY={scaleY}
				onClick={this.handleCLick} 
				onMouseOver={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}>
				{this.renderShapes()}
				{this.renderText()}
			</Group>
			
		);
	},
	renderShapes: function() {
		var shapes;
		var props = this.props;
		var fill1 = props.theme.fill1;
		var fill2 = props.theme.fill2;
		if(this.state.hover == true)
			shapes = (
			<Group>
				<Shape stroke={STROKE} strokeWidth={STROKEWIDTH} d={PATH1} fill={fill2} cursor="pointer" />
			</Group>	
		)
		else 
			shapes = (
				<Group>
					<Shape stroke={STROKE} strokeWidth={STROKEWIDTH} d={PATH1} fill={fill1}/>
					<Shape stroke={STROKE} strokeWidth={STROKEWIDTH} d={PATH2} fill={fill2}/>
				</Group>	
			)		
		return shapes;	
	},
	renderText: function() {
		var sys = this.props.sys;		
		var theme = this.props.theme;
		if(!sys || !sys.name)
			return null;
		var x
		,	font;
		switch(sys.name.length) {
			default:
			case 3:
				x = 140;
				font = "bold 70px Moderna";
				break;
			case 4:
				x = 140;
				font = "bold 60px Moderna"
				break;
		}
		var fill = this.state.hover == true ? theme.colorHover: theme.color;
		return <Tt x={x} y={80} fill={fill} alignment="center" font={font}>{sys.name}</Tt>
	},
	handleMouseOver: function() {
		if (!this.props.sys || !this.props.sys.name)
			return;
		if (this.state.hover == true)
			return;
		this.setState({hover: true})
	},
	handleMouseOut: function() {
		if (!this.props.sys || !this.props.sys.name)
			return;
		if (this.state.hover == false)
			return;
		this.setState({hover: false})
	},
	handleCLick: function() {
		var props = this.props;
		console.log(props.x,props.y)
	}

/**/
});

module.exports = SysWidget;

var STROKE = "#9e9fa1";
var STROKEWIDTH = "1";
var PATH1 = "m 16.730781,4.3182427 103.876829,0 12.22692,12.0501703 123.63752,-0.27915 c 2.83076,-0.006 3.31076,1.55022 3.31076,4.06871 l 0,163.032777 c 0,2.52137 -2.31852,4.58749 -5.14649,4.58749 l -237.905539,0 c -2.83107,0 -5.14676,-2.06362 -5.14676,-4.58749 l 0,-174.2861373 c 0,-2.52274 2.31569,-4.58636 5.14676,-4.58636 z";
var PATH2 = "m 6.9143013,55.912263 77.0668897,0 44.533499,-17.97789 141.7014,0.15071 c 2.83078,0.002 3.48058,1.46404 3.30935,3.25853 L 259.78281,184.49896 c -0.17264,1.79597 -2.32132,3.27928 -5.14649,3.27928 l -237.905539,0 c -2.82714,0 -5.01526,-1.4783 -5.14676,-3.27928 L 2.4448513,60.197833 c -0.13151,-1.80198 1.63839,-4.28557 4.46945,-4.28557 z";