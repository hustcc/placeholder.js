# Server-placehoder PHP


## What

img-src.co is a simple image placeholder service. Nothing too fancy here...just fast loading, small file sized, placeholder images for use on website mockups in HTML or other design work.

## How

You can either <span class="strikeout">ab</span>use our server and bandwidth or run your own installation of our placeholder PHP code.

### Use our server

The simplest way to get placeholder images is to follow the pattern below to create an image URL and drop that into your `img` tag. Replace {px} with the dimensions in pixels (either WxH or just W to get a square), {bg} with background color (hex), and {fg} with font color (hex). Both {bg} and {fg} are optional.

`http://placeholder.cn/{px}/{bg}/{fg}`

#### Examples

 - [http://placeholder.cn/78](http://placeholder.cn/78)
 - [http://placeholder.cn/50x30](http://placeholder.cn/50x30)
 - [http://placeholder.cn/137/aaa](http://placeholder.cn/137/aaa)
 - [http://placeholder.cn/256x128/194343/66ee99](http://placeholder.cn/256x128/194343/66ee99)

### Use your server

Head on over to our [GitHub repo](https://github.com/img-src/placeholder "GitHub repo") and grab the img-src PHP code. The README file included in the repo will walk you through getting it all set up.

## Who

img-src.co was developed by Brian Kiewel, a web developer currently based in Cleveland, OH. Please submit any bugs to our [GitHub issue tracker](https://github.com/img-src/placeholder/issues "GitHub issue tracker").