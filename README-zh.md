# image-placeholder.js

一个Javascript库，用于在浏览器端生成`placeholder image`，提供完善的配置和简单的方法。[EN-Readme](README.md)

[![Build Status](https://travis-ci.org/hustcc/placeholder.js.svg?branch=master)](https://travis-ci.org/hustcc/placeholder.js) [![npm](https://img.shields.io/npm/v/placeholder.js.svg?style=flat-square)](https://www.npmjs.com/package/placeholder.js) [![npm](https://img.shields.io/npm/dt/placeholder.js.svg?style=flat-square)](https://www.npmjs.com/package/placeholder.js) [![npm](https://img.shields.io/npm/l/placeholder.js.svg?style=flat-square)](https://www.npmjs.com/package/placeholder.js)

## 一、预览

[官方网站文档和示例](http://placeholder.cn)

![screenshots/website.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/website.png)

![screenshots/with_chinese.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/with_chinese.png)


## 二、特点

1. 不依赖任何 js 框架，比如 jq
2. YUI压缩大小1.46kb，gzip之后为`851 b`，小于1k
3. 配置项多，都有默认值
4. 使用简单


## 三、使用

提供两种方式引入，分别为：浏览器script引入、模块化引入。

### 3.1 使用script引入

引入 placeholder.js 到你的前端代码中:

```html
<script src="dist/placeholder.min.js"></script>
```

提供免费CDN:

1. [bootcdn placeholder.js](http://www.bootcdn.cn/placeholder.js/)
2. [cndjs placeholder.js](https://cdnjs.com/libraries/placeholder.js)

### 3.2 通过 ES6 引入

```js
// install before
// npm install placeholder.js

import placeholder from 'placeholder.js';

// or

var placeholder = require("placeholder.js");
```

支持UMD加载，得到的对象（如全局对象placeholder）。

### 3.3 使用方法

`1.` 调用placeholder.js的方法进行替换，举个例子如下:

```html
<img src="image_origin.png" onerror="this.src=placeholder.getData({text: 'Image 404'})">
```

`2.` 使用URL参数的方式配置Img的属性options，例如：

```html
<img class="placeholder" />
```

或者携带参数options:

```html
<img options="size=256x128&text=Hello!" class="placeholder" />
```

**注意事项：**

 - `img`标签的`class`属性要包含`placeholder`才会生效.
 - URL参数中的text值应该被`encodeURIComponent`转码，主要包括： % 为 `%25`, & 为 `%26`, = 为 `%3D`, 空格 为 `%20` e.g. 
 
```html
<img options="size=256x128&text=Hello%2525%26%3DWorld" class="placeholder">
```

上面的配置会生成一个占位图，其中的文字内容为： `Hello%25&=`.


## 四、Placeholder 配置项

Placeholder 配置项用于API方法的输入参数, e.g. `placeholder.getData({text: 'Image 404'})`. 或者作为URL参数样式作为img的属性配置， e.g. `options="size=256x128&text=Hello!"`

* `size`: placeholder图片尺寸. 例如: `256x128`, 默认: `128x128`.
* `bgcolor`: 背景颜色. 例如: `#969696`. 默认: `random`.
* `color`: 前景颜色，文字颜色. 例如: `#ccc`. 默认: `random`.
* `text`: 自定义文本内容. 例如: `Hello World, 你好`. 默认: equal to `size`.
* `fstyle`: 字体样式. 可以是 `normal / italic / oblique`. 默认: `oblique`.
* `fweight`: 字体weight. 可以是 `normal / bold / bolder / lighter / Number`. 默认: `bold`.
* `fsize`: 字体大小. 默认: `自动` 计算字体大小防止文字超出图片大小.
* `ffamily`: 字体. 默认: `consolas`.

具体参数配置例子:

```javascript
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
```

作为img的options属性为：

```html
size=256x128&text=Hello!&bgcolor=#ccc&color=#969696&fstyle=oblique&fweight=bold&fsize=40&ffamily=consolas
```


## 五、Placeholder 方法

* `placeholder.getData(opts)`: 获得placeholder图片的base64字符串，可以直接在img标签的src属性中使用，或者在css的背景中使用。
* `placeholder.getCanvas(opts)`: 获得canvas元素, 可以直接插入到DOM结构中。
* `placeholder.render()`: 渲染**class='placeholder'**的img标签，并且使用对应的options作为渲染参数。


## 六、为什么要造轮子

1. 很多 image placeholder 都是在服务端生成，需要额外搭建服务以及耗费资源。
2. [imsky/holder]( https://github.com/imsky/holder)是客户端生成，大名鼎鼎，但是在用到网页上，动态图片的时候，它的那种风格用起来不太方便。
3. 其他的 image placeholder 太大了，比如上面提到的 holder 压缩之后还有 30k 以上，其实`不太使用在网页上使用`。

## 八、LICENSE

MIT

[关于项目的 react 版本, 可以看 react-placeholder.](http://github.com/hustcc/react-placeholder)