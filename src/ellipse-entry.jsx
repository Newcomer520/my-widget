var React = require('react');
var EntityMixin = require('./mixins/entity.jsx');
var EntityPropTypes = require('./mixins/entity-proptypes');
var ReactART = require('./require-react-art').ART;
var Ellipse = require('./require-react-art').Ellipse;
var Group = ReactART.Group;
var _ = require('underscore');
var DefaultStyle = require('./themes/blue-circle');

var EllipseEntry = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	},
	mixins: [EntityMixin, EntityPropTypes],
	render: function() {
		var style = _.extend({}, DefaultStyle, this.props.theme);
		var width = this.props.width;
		var height = this.props.height;
		var x = this.props.x;
		var y = this.props.y;
		return (
			<Group x={x} y={y}>
				<Ellipse fill={style.fill} {...this.props} x={0} y={0}  />
				{this.renderDescriptions(style, this.props.radius * 2)}	
			</Group>
		);//
	}

});

module.exports = EllipseEntry;