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
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		mustache_site_generator: {
			options: {
				global:'test'
			},
			default_options  : {
				options: {}, files: {
					'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
				}
			},
			custom_options: {
				options : {
					separator: ': ', punctuation: ' !!!'
				}, files: {
					'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
				}
			},
			expand: {
				options : {
					separator: ': ', punctuation: ' !!!'
				},
				files: [
					{
						'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
					},
					{
						'tmp/custom_options/2': ['test/fixtures/testing', 'test/fixtures/123']
					}
				]
			},
			test: {
				options : {

				},
				files: [
					{
						src:'test/fixtures/**',
						lang:'test/lang/ko.json',
						include: {
							head: 'test/layouts/head.tmpl'
						},
						dest:'test/expected'
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
	//grunt.registerTask('test', ['clean', 'mustache_site_generator', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('run', ['mustache_site_generator:test']);

};
