/*!
	placeholder.js - client side image placeholders
	© 2015 Hustcc - http://www.aTool.org
	Site:     http://github.atool.org/placeholder.js.html
	Issues:   https://github.com/hustcc/placeholder.js/issues
	License:  MIT
*/
(function() {
	var c, cc; //公用一个实例，减少内存占用，减少资源消耗
	function createCanvas(size, text, color, bgcolor, font) {
		if (!c || !cc) {
			//如果不存在则实例化
			c = document.createElement('canvas');
			cc = c.getContext('2d');
		}
		//图片大小
		c.width = parseInt(size[0]);
		c.height = parseInt(size[1]);
		cc.clearRect(0, 0, c.width, c.height); //清楚已有的画布
		//设置背景色
		cc.fillStyle = bgcolor;
		cc.fillRect(0, 0, c.width, c.height);
		//字体颜色
		cc.fillStyle = color;
		cc.font = font.style + ' normal ' + font.weight + ' ' + (font.size || 40) + 'px ' + font.family;
		var scale = 1.0, default_size = 40;
		if (font.size === '') {
			//auto calculate size
			var width_limit = 0.7 * c.width, 
				heigth_limit = 0.7 * c.height, 
				text_width = cc.measureText(text).width,
				text_height = default_size;

			scale = Math.min(width_limit / text_width, heigth_limit / text_height);
		}
		//文字居中
		cc.translate(c.width / 2, c.height / 2)
		cc.scale(scale, scale);
        cc.textAlign = 'center';
        cc.textBaseline = 'middle';
        
        cc.fillText(text, 0, 0);
		
		return c;
	}

	function placeholder(opts) {
		return placeholderCanvas(opts).toDataURL();
	}
	function randomColor() {
		return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
	}
	function placeholderCanvas(opts) {
		opts = opts || {};
		var size = opts.size || '128x128',
		text = opts.text || size,
		bgcolor = opts.bgcolor || randomColor(), //other placeholder default bgcolor is '#ccc',
		color = opts.color || randomColor(), //other placeholder default color is '#969696',
		font = opts.font || {};

		font = {
			style: font.style || 'normal', //normal / italic / oblique
			weight: font.weight || 'bold', //normal / bold / bolder / lighter
			size: font.size || '', //auto calculate the font size to response to the image size
			family: font.family || 'consolas' //规定字号和行高，以像素计。
		};

		size = size.split('x');
		if (size.length !== 2) {
			size = [128, 128]
		}
		return createCanvas(size, text, color, bgcolor, font);
	}

	window.placeholder = {
		getData: placeholder,
		getCanvas: placeholderCanvas
	};
})();
