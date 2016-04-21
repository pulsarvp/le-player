var path = require('path');
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
		webpack : {
			options : webpackConfig,
			build : {},
			"build-dev" : {
				devtool : 'cheap-inline-module-source-map',
				plugins : [
					new webpack.NoErrorsPlugin()
				]
			}
		},
		less : {
			development : {
				options : {
					"paths" : [
						"bower_components"
					],
					cleancss : true,
					strictUnits : true
				},
				files : { 'dist/css/<%= pkg.name %>.css' : 'source/less/<%= pkg.name %>.less' }
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
					sourceMap : true
				},
				files : { 'dist/css/<%= pkg.name %>.min.css' : 'source/less/<%= pkg.name %>.less' }
			}
		},
		sass : {
			development : {
				options : {
					precision : 3,
					style : 'expanded',
					sourcemap : 'none'
				},
				files : {
					'dist/css/<%= pkg.name %>.css' : 'source/sass/<%= pkg.name %>.scss'
				}
			},
			production : {
				options : {
					precision : 3,
					style : 'compressed'
				},
				files : {
					'dist/css/<%= pkg.name %>.min.css' : 'source/sass/<%= pkg.name %>.scss'
				}
			}
		},
		postcss : {
			options : {
				processors : [
					require('autoprefixer')({ browsers : 'last 2 versions' })
				]
			},
			dist : {
				src : 'dist/css/*.css'
			}
		},
		concat : {
			js : {
				src : [
					'source/js/<%= pkg.name %>.es6.js'
				],
				dest : 'dist/js/<%= pkg.name %>.es6.js'
			}
		},
		watch : {
			less : {
				files : [ 'source/less/**/*' ],
				tasks : [ 'less:development', 'postcss' ]
			},
			// sass : {
			// 	files : [ 'source/sass/**/*' ],
			// 	tasks : [ 'sass:development' ]
			// },
			js : {
				files : [ 'source/js/**/*.js' ],
				tasks : [ 'concat:js', 'webpack:build-dev' ]
			}
		},
		uglify : {
			js : {
				src : 'dist/js/<%= pkg.name %>.js',
				dest : 'dist/js/<%= pkg.name %>.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', [ 'less', 'postcss', 'webpack:build-dev', 'concat', 'watch' ]);
	grunt.registerTask('production', [ 'clean', 'less', 'postcss', 'concat', 'webpack:build', 'uglify' ]);
};
