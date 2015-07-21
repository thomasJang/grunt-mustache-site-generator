/*
 * grunt-mustache-site-generator
 * https://github.com/thomasjang/grunt-mustache-generator.gif
 *
 * Copyright (c) 2015 ThomasJang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'], options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['test/expected']
		},

		// Configuration to be run (and then tested).
		mustache_site_generator: {
			options: {
				global:'test'
			},
			test: {
				options : {

				},
				files: [
					{
						layout: 'test/layouts/basic.tmpl',
						layout_view: 'test/layouts/basic.json',
						src: 'test/fixtures/**', // contents of layout
						lang: {
							"ko":'test/lang/ko.json',
							"en":'test/lang/en.json'
						},
						dest: 'test/expected'
					}
				]
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'mustache_site_generator', 'nodeunit']);

};
