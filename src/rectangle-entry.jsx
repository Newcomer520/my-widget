var React = require('react');
var ReactART = require('./require-react-art').ART;
var Rectangle = require('./require-react-art').Rectangle;
var EntityMixin = require('./mixins/entity.jsx');
var EntityPropTypes = require('./mixins/entity-proptypes');
var DefaultStyle = require('./themes/orange-rect');
var _ = require('underscore');

var Group = ReactART.Group;
var RectangleEntry = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	},
	mixins: [EntityMixin, EntityPropTypes],
	render: function() {
		var props = this.props;
		var w = +props.width;
		var h = +props.height;
		var style = _.extend({}, DefaultStyle, props.theme);
		return (
			<Group x={this.props.x} y={this.props.y}>
				<Rectangle x={-w/2} y={-h/2} 
					width={w} height={h} radius={style.radius} stroke={style.stroke} strokeWidth={style.strokeWidth}
					fill={style.fill} />
				{this.renderDescriptions(style, h, 3)}
			</Group>
		);
	}

});

module.exports = RectangleEntry;