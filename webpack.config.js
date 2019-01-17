var path = require('path')

module.exports = {
	entry: './src/components/RingSpinner/index.jsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.m?jsx$/,
				exclude: /(node_modules|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	externals: {
		react: 'commonjs react'
	}
}
