var React = require('react');
var EntityMixin = require('./mixins/entity.jsx');
var EntityPropTypes = require('./mixins/entity-proptypes');
var ReactART = require('./require-react-art').ART;
var Circle = require('./require-react-art').Circle;
var Group = ReactART.Group;
var _ = require('underscore');
var DefaultStyle = require('./themes/blue-circle');

var CircleEntry = React.createClass({
	propTypes: {
		radius: React.PropTypes.number.isRequired
	},
	mixins: [EntityMixin, EntityPropTypes],
	render: function() {
		var style = _.extend({}, DefaultStyle, this.props.theme);		
		return (
			<Group x={this.props.x} y={this.props.y}>
				<Circle fill={style.fill} {...this.props} x={0} y={0}  />
				{this.renderDescriptions(style, this.props.radius * 2)}	
			</Group>
		);//
	}

});

module.exports = CircleEntry;