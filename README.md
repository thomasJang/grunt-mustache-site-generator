# grunt-mustache-site-generator

> To resolve layout and multi-language with mustache template (mustache 템플릿으로 include, 멀티랭귀지를 해결하기)

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
		},
	},
});
```

### Files

#### files.file.layout 
Type: `String`
path of layout file

#### files.file.layout_view
Type: `String`
Default value: ''
path of layout view

#### files.file.src
Type: `String`
Grunt src

#### files.file.lang
Type: `Object`
lang key and path of lang file

#### files.file.dest
Type: `String`
path of output 
It makes the file name of the 'src'. 'output' as a child

## Example
The source directory of your templates, the directory should be structured like:
```
.
├── expected
├── fixtures
│   └── sample.html
└── lang
│   ├── en.json
│   └── ko.json
└── layouts
    ├── basic.json
    └── basic.tmpl
```

* basic.tmpl
```html
<html>
<head>
	<title>basic layout {{page.title}} {{some}}</title>
</head>
<body>
<!-- include body content -->
{{>contents}}
</body>
</html>
```

* basic.json
```json
{
	"page":{
		"title":"테스트입니다."
	},
	"some": "somes"
}
```

* sample.html
```html
<div>{{name}}</div>
<div>Thomas Jang</div>
<div>{{age}}</div>
<div>39</div>
<div>{{sex}}</div>
<div>남</div>
```

* en.json
```json
{
	"name": "name",
	"age": "age",
	"sex": "sex"
}
```

### Result
```html
<html>
<head>
	<title>basic layout 테스트입니다. somes</title>
</head>
<body>
<!-- include body content -->
<div>name</div>
<div>Thomas Jang</div>
<div>age</div>
<div>39</div>
<div>sex</div>
<div>남</div></body>
</html>
```

### Related Projects
- AXISJ (https://www.axisj.com/axisj), (https://github.com/axisj/axisj)
- AXU (https://www.axisj.com/axu), (http://axu.axisj.com), (https://github.com/axisj/axu)
- AXU4J (https://github.com/axisj/axu4j)
- AXIcon (https://www.axisj.com/en/axicon/), (http://axicon.axisj.com), (https://github.com/axisj/axicon)