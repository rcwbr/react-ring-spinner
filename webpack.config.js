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
				test: /\.jsx?$/,
				include: path.resolve(__dirname, 'src'),
				exclude: [
					path.resolve(__dirname, 'build'),
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'tests')
				],
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
