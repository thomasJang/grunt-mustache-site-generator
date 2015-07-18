/*
 * grunt-mustache-site-generator
 * https://github.com/thomasjang/grunt-mustache-generator.gif
 *
 * Copyright (c) 2015 ThomasJang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	var mustache = require("mustache");

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('mustache_site_generator', '설명글', function () {

		/*
		for(var k in this){
			grunt.log.writeln(k + ":" + this[k]);
		}
		*/

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			punctuation: ':', separator: ', '
		});

		// Iterate over all specified file groups.
		this.files.forEach(function (f) {
			// Concat specified files.

			/*
			grunt.log.writeln('dest:' + f.dest);
			grunt.log.writeln('src:' + f.src);
			grunt.log.writeln('lang:' + f.lang);
			grunt.log.writeln('include:' + f.include);
			*/


			// lang 파일 검사
			if (!grunt.file.exists(f.lang)) {
				grunt.log.warn('Lang file "' + f.lang + '" not found.');
			}
			var lang = grunt.file.read(f.lang);

			// include 검사
			var partial = {};
			for(var p in f.include){
				if (!grunt.file.exists(f.include[p])) {
					grunt.log.warn('include file "' + f.include[p] + '" not found.');
					break;
				}
				partial[p] = grunt.file.read(f.include[p]);
			}

			var src = f.src.filter(function (filepath, isFile) {
				if(!isFile) return false;
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			src.forEach(function(filepath){
				//grunt.log.writeln(filepath);

				var tmpl = grunt.file.read(filepath), output, dest_filename;

				/*
				grunt.log.writeln(tmpl);
				grunt.log.writeln(lang);
				grunt.log.writeln(partial);
				*/
				output = mustache.render(tmpl, lang, partial);

				/// grunt.log.writeln(output);

				// Write the destination file.

				dest_filename = filepath.substring( Math.max(filepath.lastIndexOf('/'), filepath.lastIndexOf('\\')), filepath.length);

				grunt.file.write(f.dest + dest_filename, output);
				// Print a success message.
				 grunt.log.writeln('File "' + f.dest + dest_filename + '" created. ');
			});

			/*
			var src = f.src.filter(function (filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function (filepath) {
				// Read file source.
				return grunt.file.read(filepath);
			}).join(grunt.util.normalizelf(options.separator));

			// Handle options.
			grunt.log.writeln(src);
			src += options.punctuation;

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created. ');
			*/

		});
	});

};
