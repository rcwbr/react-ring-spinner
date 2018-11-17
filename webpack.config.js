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
				exclude: /(node_modules|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env']
					}
				}
			}
		]
	},
	externals: {
		react: 'commonjs react'
	}
}
