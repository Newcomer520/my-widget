/**
 * Copyright 2013-2014 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Circle.art
 * @typechecks
 *
 * Example usage:
 * <Circle
 *   radius={10}
 *   stroke="green"
 *   strokeWidth={3}
 *   fill="blue"
 * />
 *
 */

var React = require('react');
var ReactART = require('./ReactART');

var Props = React.PropTypes;
var Shape = ReactART.Shape;
var Path = ReactART.Path;

/**
 * Circle is a React component for drawing circles. Like other ReactART
 * components, it must be used in a <Surface>.
 */
var Ellipse = React.createClass({displayName: 'Ellipse',

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },

  render: function() {
    var width = this.props.width;
    var height = this.props.height;
    var rx = width / 2;
    var ry = height / 2;

    var path = Path().moveTo(-rx, 0)
		.arc(width, 0, rx, ry)
		.arc(-width, 0, rx, ry)
		.close();
    return React.createElement(Shape, React.__spread({},  this.props, {d: path}));
  }

});

module.exports = Ellipse;



/*module.exports = Shape(function(width, height){

	this.width = width;
	this.height = height;

	var rx = width / 2, ry = height / 2;

	this.path
		.move(0, ry)
		.arc(width, 0, rx, ry)
		.arc(-width, 0, rx, ry)
		.close();

});*/