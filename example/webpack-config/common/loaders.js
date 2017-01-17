export default (paths, extractSCSS) => {
	return [
		{
			test: /\.(js|jsx)$/,
			use: {
				loader: "babel-loader",
				options: {
					babelrc: false,
					cacheDirectory: true,
					presets: [
						[
							"es2015",
							{
								loose: true,
								modules: false
							}
						],
						"react",
						"stage-1"
					],
					plugins: [
						"transform-runtime"
					]
				}
			},
			exclude: paths.node_modules,
			include: paths.source,
		},
		{
			test: /\.(css|scss)$/,
			loader: extractSCSS.extract({
				loader: [
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					{
						loader: 'sass-loader'
					}
				],
				defaultLoader: "style-loader"
			})
		},
		{
			test: /\.(png|jpg|jpeg)$/,
			use: ["file-loader"]
		}
	]
}