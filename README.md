# grunt-mustache-site-generator

> To resolve include and multi-language with mustache template (mustache 템플릿으로 include, 멀티랭귀지를 해결하기)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, 
be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mustache-site-generator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mustache-site-generator');
```

## The "mustache_site_generator" task

### Overview
In your project's Gruntfile, add a section named `mustache_site_generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	mustache_site_generator: {
		options: {
			// Task-specific options go here.
		},
		your_target: {
			// Target-specific file lists and/or options go here.
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
		},
	},
});
```

### Options

지금 개발중

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
