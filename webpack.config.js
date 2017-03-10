var config = {
	entry : './main.js',
	output : {
		path : '/',
		filename : 'bundle.js'
	},
	devServer : {
		inline : true,
		 port: 8080
	},
	devtool : "source-map",
	module : {
		loaders : [{
			test : /\.jsx?$/, 
			exclude : /node_modules/ , 
			loader : 'babel-loader',

			query : {
				presets :['es2015','react','stage-2']
			}
		}] 
	}
}
module.exports = config 