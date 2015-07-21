'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.mustache_site_generator = {
	setUp            : function (done) {
		// setup here if necessary
		done();
	}, test          : function (test) {
		test.expect(1);

		var en = grunt.file.read('test/expected/en/sample.html');
		var ko = grunt.file.read('test/expected/ko/sample.html');
		test.ok(en&&ko, 'en/ko make success');
		//test.ok(ko, 'en make success');

		test.done();
	}
};
