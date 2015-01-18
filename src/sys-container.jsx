var React = require('react');
var ReactART = require('./require-react-art').ART;
var Group = ReactART.Group;
var Shape = ReactART.Shape;
var Surface = ReactART.Surface;
var System = require('./sys.jsx');
var Rectangle = require('./require-react-art').Rectangle;
var _ = require('underscore');
var Text = ReactART.Text;
var defaultTheme = require('./themes/theme-blue-01');

var SysContainer = React.createClass({
	propTypes: {
		systems: React.PropTypes.array
	},
	render: function() {				
		var theme = this.getTheme();		
		return (
			<Surface width={WIDTH} height={HEIGHT}>
				<Rectangle x={PADDINGMAINLEFT} y={RECTOFFSETTOP} width={WIDTH - PADDINGMAINLEFT - PADDINGMAINRIGHT} height={HEIGHT - RECTOFFSETTOP - PADDINGMAINTOP - PADDINGMAINBOTTOM} radius={10} fill={theme.fill} stroke={theme.stroke} strokeWidth={theme.strokeWidth}></Rectangle>
				{this.renderRectTitle(theme)}	
				<Group>					
					{this.renderSystems(theme)}					
				</Group>
			</Surface>
		);
	},
	renderRectTitle: function(theme) {
		var name = this.props.name ? this.props.name: this.props.id? this.props.id: null;
		var font = "bold 18px Moderna";
		var fill = theme.title.fill;
		var color = theme.title.color;
		
		return (
			<Group x={PADDINGMAINLEFT + WIDTH/4} y={0} >
				<Rectangle width={WIDTH/2} height={RECTOFFSETTOP*2} radius={3} fill={fill}></Rectangle>				
				<Text x={WIDTH/4} y={5} fill={color} alignment="center" font={font}>{name}</Text>
			</Group>
		);
	},
	renderSystems: function(theme) {		
		var dirTheme = theme.dir;			
		var SYSs = this.props.systems || [];
		var sysWidgets = [];
		for (var i = 0; i < 6; i++) {
			if(SYSs.length - 1 < i)
				sysWidgets[i] = 
			(<System 
				x={ PADDINGMAINLEFT + PADDINGLEFT + i%2 * SYSWIDTH } 
				y={RECTOFFSETTOP + PADDINGTOP + Math.floor(i/2) * SYSHEIGHT} 
				key={this.props.id + i} 
				theme={dirTheme}/>);
			else
				sysWidgets[i] = 
			(<System 
				x={ PADDINGMAINLEFT + PADDINGLEFT + i%2 * SYSWIDTH } 
				y={RECTOFFSETTOP + PADDINGTOP + Math.floor(i/2) * SYSHEIGHT} 
				key={this.props.id + i} 
				theme={dirTheme}
				sys={SYSs[i]} />);
		}
		return sysWidgets;
	},
	getTheme: function() {
		var props = this.props;		
		var options = props.options;
		var theme = options && options.themes && options.themes.origin
			 ? options.themes.origin: defaultTheme;

		var theme = _.extend({},  defaultTheme, theme);
		
		return theme;
	}

});

module.exports = SysContainer;

var WIDTH = 140;
var HEIGHT = 140;
var PADDINGTOP = 15;
var PADDINGLEFT = 13; /*系統方格的padding left*/
var PADDINGMAINLEFT = 3;
var PADDINGMAINRIGHT = 3;
var PADDINGMAINTOP = 3;
var PADDINGMAINBOTTOM = 3;
var RECTOFFSETTOP = 12;
var SYSWIDTH = 60;
var SYSHEIGHT = 35;