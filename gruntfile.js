var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : {
			options : {
				force : true
			},
			production : [
				'dist/**/*'
			]
		},
		'http-server': {
			'dev': {
				port : 2016,
			}
		},
		webpack : {
			options : webpackConfig,
			build : {
				devtool : 'inline-source-map',
			},
			'build-min' : {
				output : {
					filename : '[name].min.js',
				},
				plugins : [
					new webpack.optimize.UglifyJsPlugin({
						compress : {
							warnings : false
						}
					})
				],
			},
			dev : {
				devtool : 'inline-source-map',
				watch : true
			}
		},
		less : {
			development : {
				options : {
					sourceMapFileInline : true,
				},
				expand : true,
				cwd : 'source/less/',
				src : '**/le-player*',
				ext : '.css',
				dest : 'dist/css/',
				profile : true,
				displayModules : true,
			},
			production : {
				options : {
					"paths" : [
						"bower_components"
					],
					compress : true,
					yuicompress : true,
					strictUnits : true,
					optimization : 2,
					sourceMap : false
				},
				expand : true,
				cwd : 'source/less/',
				src : '**/le-player*',
				ext : '.min.css',
				dest : 'dist/css/'
			}
		},
		postcss : {
			options : {
				processors : [
					require('autoprefixer')({ browsers : 'last 2 versions' }),
					require('postcss-initial')()
				]
			},
			dist : {
				src : 'dist/css/**/le-player*'
			}
		},
		watch : {
			less : {
				files : [ 'source/less/**/*' ],
				tasks : [ 'less:development', 'postcss' ]
			},

			svgstore : {
				files : [ 'source/svg/*.svg' ],
				tasks : [ 'svgstore' ]
			}

		},
		uglify : {
			js : {
				src : 'dist/js/<%= pkg.name %>.js',
				dest : 'dist/js/<%= pkg.name %>.min.js'
			}
		},
		svgstore : {
			options : {
				prefix : 'leplayer-icon-',
				svg : {
					xmlns : 'http://www.w3.org/2000/svg',
				},
				symbol : {
					fill : 'currentColor',
					viewBox : '0 0 16 16'
				}
			},
			default : {
				files: {
					'dist/svg/svg-defs.svg': ['source/svg/*.svg'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('default', ['svgstore', 'less:development', 'postcss', 'webpack:dev', 'watch']);
	grunt.registerTask('production', ['clean', 'less', 'postcss', 'svgstore', 'webpack:build', 'webpack:build-min']);
};
