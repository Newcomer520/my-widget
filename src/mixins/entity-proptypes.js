var React = require('react');

var PropTypes = {
	propTypes: {
		descriptions: React.PropTypes.array.isRequired,
		theme: React.PropTypes.object,
		x: React.PropTypes.number.isRequired,
		y: React.PropTypes.number.isRequired
	}
};

module.exports = PropTypes;