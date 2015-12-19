# image-placeholder.js

一个Javascript库，用于在浏览器端生成`placeholder image`，提供完善的配置和简单的方法。[EN-Readme](README.md)


## 预览

[官方网站示例](http://github.atool.org/placeholder.js.html)

![screenshots/website.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/website.png)

![screenshots/with_chinese.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/with_chinese.png)


## 特点

1. 不依赖任何 js 框架，比如 jq
2. 小于 1k ，具体是`0.98k`
3. 配置项多，都有默认值
4. 使用简单


## 使用

引入 placeholder.js 到你的前段代码中:

	<script src="placeholder.js"></script>

然后调用placeholder.js的方法进行替换，举个例子如下:

	<img src="image_origin.png" onerror="this.src=placeholder.getData({text: 'Image 404'})">


## Placeholder 配置项

Placeholder 配置项用于API方法的输入参数, e.g. `placeholder.getData({text: 'Image 404'})`. 

* `size`: placeholder图片尺寸. 例如: `256x128`, 默认: `128x128`.
* `bgcolor`: 背景颜色. 例如: `#969696`. 默认: `random`.
* `color`: 前景颜色，文字颜色. 例如: `#ccc`. 默认: `random`.
* `text`: 自定义文本内容. 例如: `Hello World, 你好`. 默认: equal to `size`.
* `font.style`: 字体样式. 可以是 `normal / italic / oblique`. 默认: `oblique`.
* `font.weight`: 字体weight. 可以是 `normal / bold / bolder / lighter / Number`. 默认: `bold`.
* `font.size`: 字体大小. 默认: `自动` 计算字体大小防止文字超出图片大小.
* `font.family`: 字体. 默认: `consolas`.

具体参数配置例子:

	var opts = {
      	size: '512x256',
		bgcolor: '#ccc', 
		color: '#969696',
		text: 'Hello World, 你好',
      	font: {
        	style:'oblique',
			weight: 'bold',
			default: 'bold'
        	size:'40',
			family: 'consolas'
      	}
    }
	console.log(placeholder.getData(opts)) //get the base64 of the placeholder image.


## Placeholder 方法

* `placeholder.getData(opts)`: 获得placeholder图片的base64字符串，可以直接在img标签的src属性中使用，或者在css的背景中使用。
* `placeholder.getCanvas(opts)`: 获得canvas元素, 可以直接插入到DOM结构中。


## 为什么要造轮子

1. 很多 image placeholder 都是在服务端生成，需要额外搭建服务以及耗费资源。
2. [imsky/holder]( https://github.com/imsky/holder)是客户端生成，大名鼎鼎，但是在用到网页上，动态图片的时候，它的那种风格用起来不太方便。
3. 其他的 image placeholder 太大了，比如上面提到的 holder 压缩之后还有 30k 以上，其实`不太使用在网页上使用`。


## 待完成

1. 更多的灵活配置。
2. 直接渲染DOM上包含class包含`placehoder`的img元素，并且使用URL方式传递配置项，类似于`imsky/holder`。


## 其他

任何问题欢迎反馈和 pr ，代码非常简单，相信 1 分钟你就可以看懂，非常欢迎`push request`。