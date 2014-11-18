var path = require('path');

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			dev: {
				options: {
					port: 8000,
					base: './'
				}
			}
		},

		// clean: {
		// 	all: ['dist', './*.html', './js', './css']
		// },

		// assemble: {
		// 	options: {
		// 		layout: 'page.hbs',
		// 		layoutdir: 'src/layouts/',
		// 		flatten: true
		// 	},
		// 	dist: {
		// 		files: {
		// 			'./': ["src/pages/**/*.hbs" ]
		// 		}
		// 	}
		// },

		concat: {
			options: {
				separator: ';'
			},
			framework: {
				src: ['assets/src/js/framework/jquery.js', 'assets/src/js/framework/underscore.js','assets/src/js/framework/backbone.js'],
				dest: 'assets/dist/js/framework.js'
			},
			dist: {
				src: ['assets/src/js/*.js'],
				dest: 'assets/dist/js/all.min.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'assets/dist/js/all.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		// copy: {
		// 	dist: {
		// 		files: [
		// 			{ expand: true, flatten: true, src: 'assets/src/static/js/**', dest: './js/', filter: 'isFile' },
		// 			{ expand: true, flatten: true, src: 'assets/src/static/*.*', dest: './' }

		// 		]
		// 	}
		// },

		less: {
			development: {
				options: {
					paths: ['assets/src/css'],
					cleancss: true
				},
				files: {
					'assets/dist/css/all.min.css': ['assets/src/css/all.less']
				}
			}
		},

		express: {
			options: {
				port: 8000
			},
			dev: {
				options: {
					script: 'app.js'
				}
			}
		},

		watch: {
			express: {
				files: ['routes/**/*.js', 'models/**/*.js'],
				tasks: ['express:dev'],
				options: {
					spawn: false
				}
			},
			js: {
				files: ['assets/src/js/**/*.js'],
				tasks: ['compileJS']
			},
			less: {
				files: ['assets/src/css/**/*.less'],
				tasks: ['compileLess']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');

	/* grunt tasks */
	grunt.registerTask('compileJS', ['concat']);
	grunt.registerTask('compileLess', ['less']);
	grunt.registerTask('default', ['compileJS', 'compileLess', 'express', 'watch']);
};