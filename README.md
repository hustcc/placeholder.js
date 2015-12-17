# image-placeholder.js

A javascript lib to generate `placeholder image` on client browser side.


## Feature

 - do not depend on jQuery or other javascript framework.
 - very lite, only `0.79kb`. can be smaller after gzip.
 - so many option config, all has default value.
 - vaer easy to use.


## Usage

see file `index.html`, or below:
	
	//option config
	var opts = {
      	size: '512x256', //image size, default: '128x128'
		bgcolor: '#ccc', //background-color, default: random color
		color: '#969696', //text color, default: random color
		text: 'Hello World, 你好', //text on image, default: size
      	font: {
        	style:'oblique', //font-style, can be: normal / italic / oblique, default: 'oblique'
			weight: 'bold', //font-weight, can be: normal / bold / bolder / lighter / Number, default: 'bold'
        	size:'40', //font-size: Number, default: 30
			family: 'consolas' //font-family, default: 'consolas'
      },
      
    }
	//API method
	//1. get the image base64 
	window.placeholder.getData(opts); 
	//2. get the image canvas element
	window.placeholder.getCanvas(opts); //get the image canvas element


## Why another Holder?

 - image placeholder generate by server side is not my need.
 - [imsky/holder](https://github.com/imsky/holder) can generate on client browser side, `BUT`, the sytle is `holder.js/300x200`, so hard to use on website. FOR EXAMPLE:


	<!-- start -->
	<image src="the-origin-image.png" onerror="img_not_exist(this)" /> 
	
	<script type="text/javascript">
		function img_not_exist(obj) {
			obj.src="xxxooo"; //TOOD: use image placehoder
			obj.onerror = null;
		}
	</script>


 - other image placeholder javascript file size is too large, such as `imsky/holder is 30.8 KB`, not suitable for website.


## TODO

1. set default `font_size` is 'auto', can auto calculate the size of text font to avoid the text overflow.
2. more useful option paramters.

## Demo & Preview

![screenshot.png](screenshot.png)

