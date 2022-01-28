const path = require('path')
const MiniCssExtracPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.tsx',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'my-react-package.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtracPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', 'js', 'jsx'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		library: {
			type: 'commonjs2',
		},
	},
	externals: {
		react: 'commonjs react',
	},
}
