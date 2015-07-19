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

			var lang_view = {};
			// lang 파일 검사
			for(var lang in f.lang){
				if (!grunt.file.exists(f.lang[lang])) {
					grunt.log.warn('lang.'+ lang +' file "' + f.lang[lang] + '" not found.');
				}else{
					lang_view[lang] = grunt.file.readJSON(f.lang[lang]);
				}
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

			// layout 파일검사
			if (!grunt.file.exists(f.layout)) {
				grunt.log.warn('layout file "' + f.layout + '" not found.');
			}
			var contents_tmpl = grunt.file.read(f.layout);

			// layout_view 파일검사
			var layout_view = {};
			if (f.layout_view != "" && grunt.file.exists(f.layout_view)) {
				layout_view = grunt.file.readJSON(f.layout_view);
			}

			src.forEach(function(filepath){
				//grunt.log.writeln(filepath);

				var tmpl = grunt.file.read(filepath),
				    output, layout_output,
				    dest_filename;


				for(var lang in lang_view){

					output = mustache.render(tmpl, lang_view[lang]);
					layout_output = mustache.render(contents_tmpl, layout_view, {contents:output});

					// Write the destination file.
					dest_filename = filepath.substring( Math.max(filepath.lastIndexOf('/'), filepath.lastIndexOf('\\')), filepath.length);

					grunt.file.write(f.dest + '/' + lang + dest_filename, layout_output);
					// Print a success message.
					grunt.log.writeln('File "' + f.dest + '/' + lang + dest_filename + '" created. ');

				}

			});


		});
	});

};
