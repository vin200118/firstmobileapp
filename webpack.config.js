const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
	    path: path.resolve(__dirname, "builder"),
	    filename: 'index_bundle.js',
	    publicPath: '/'
	  },
	  
	  optimization: {
		    splitChunks: {
		      chunks: 'async',
		      minSize: 30000,
		      maxSize: 0,
		      minChunks: 1,
		      maxAsyncRequests: 5,
		      maxInitialRequests: 3,
		      automaticNameDelimiter: '~',
		      automaticNameMaxLength: 30,
		      name: true,
		      cacheGroups: {
		        vendors: {
		          test: /[\\/]node_modules[\\/]/,
		          priority: -10
		        },
		        default: {
		          minChunks: 2,
		          priority: -20,
		          reuseExistingChunk: true
		        }
		      }
		    }
		  },  
	  
	  
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"]
      },
      {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
      }
    ]
  },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}