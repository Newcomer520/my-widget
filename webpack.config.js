var path = require('path');

module.exports = {
	entry: ['./src/main.jsx'],
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded'},
			{test: /\.jsx$/, loader: 'jsx-loader'}
		]
	},
	output: {
		path: path.join(__dirname, "build"),
		publicPath: "build/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	externals: {
		jquery: "jQuery",
		d3: "d3"
	},
	debug: true,
	devtool: '#inline-source-map',
	node: {
	  fs: "empty"
	}
}