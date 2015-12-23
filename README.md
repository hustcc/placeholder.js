# image-placeholder.js

A javascript library to generate `placeholder image` on client browser side. [中文Readme帮助文档](README-zh.md)

[![Build Status](https://travis-ci.org/hustcc/placeholder.js.svg?branch=master)](https://travis-ci.org/hustcc/placeholder.js)

## Demo & Preview

[Website Demo](http://github.atool.org/placeholder.js.html)

![screenshots/website.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/website.png)

![screenshots/with_chinese.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/with_chinese.png)


## Feature

 - Pure javascript, do not depends on jQuery or other javascript framework.
 - Very lite, only `0.98k`. can be smaller after gzip. After add img options, library is up to `1.52kb`.
 - So many option config, all has default value.
 - Very easy to use.


## Usage

Include placeholder.js in your HTML:

	<script src="placeholder.js"></script>

`1.` Programmatic use API to process image with a specific src attribute, like this one:

	<img src="image_origin.png" onerror="this.src=placeholder.getData({text: 'Image 404'})">

`2.` Holder will then process all images with a specific src attribute, like this one:
	
	<img class="placeholder" />

or with options setting:

    <img options="size=256x128&text=Hello!" class="placeholder" />

**Notice：** 

 - the attribute `class` of `img` should contain `placeholder`.
 - the url paramter `text` should be after `encodeURIComponent`, contains % should be `%25`, & should be `%26`, = should be `%3D`, e.g. 
 

	<img options="size=256x128&text=Hello%2525%26%3DWorld" class="placeholder">

the config above will genertate image placeholder with text `Hello%25&=`.

## Placeholder options

Placeholder options are set function input,  e.g. `placeholder.getData({text: 'Image 404'})`, or set through URL properties e.g. `options="size=256x128&text=Hello!"`

* `size`: The size of placeholder. Example: `256x128`, Default: `128x128`.
* `bgcolor`: Background color. Example: `#969696`. Default: `random`.
* `color`: Foreground (text) color. Example: `#ccc`. Default: `random`.
* `text`: Custom text. Example: `Hello World, 你好`. Default: equal to `size`.
* `fstyle`: Custom text font. Can be `normal / italic / oblique`. Default: `oblique`.
* `fweight`: Custom text weight. Can be `normal / bold / bolder / lighter / Number`. Default: `bold`.
* `fsize`: Custom text size. Default: `automation` calculate to avoid text overflow.
* `ffamily`: Custom text family. Default: `consolas`.

For Example, use as var to function input:

	var opts = {
      	size: '512x256',
		bgcolor: '#ccc', 
		color: '#969696',
		text: 'Hello World, 你好',
    	fstyle:'oblique',
		fweight: 'bold',
    	fsize:'40',
		ffamily: 'consolas'
    }
	console.log(placeholder.getData(opts)) //get the base64 of the placeholder image.

use as URL properties:
	
	size=256x128&text=Hello!&bgcolor=#ccc&color=#969696&fstyle=oblique&fweight=bold&fsize=40&ffamily=consolas
	

## Placeholder methods

* `placeholder.getData(opts)`: Get the base64 string of placeholder image, can be used in the `src` of img, or in the background-url of css style.
* `placeholder.getCanvas(opts)`: Get the canvas element, can be append to DOM.


## Why another Holder?

 - Image placeholder generate by server side is not my need.
 - [imsky/holder](https://github.com/imsky/holder) can generate on client browser side, `BUT`, the sytle is `holder.js/300x200`, so hard to use on website when need dynamic image.
 - Other image placeholder javascript file size is too large, such as `imsky/holder is 30.8 KB`, not suitable for website.


## TODO

1. More useful option paramters.
2. As a client javascript library, try more and more smaller.


## Other

welcome pr and issue, the code is simple.
