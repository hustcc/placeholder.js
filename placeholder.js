(function() {
	function createCanvas(size, text, color, bgcolor, font) {
		var c = document.createElement('canvas');
		//图片大小
		c.width = parseInt(size[0]);
		c.height = parseInt(size[1]);
		var cc = c.getContext('2d');
		//设置背景色
		cc.fillStyle = bgcolor;
		cc.fillRect(0, 0, c.width, c.height);
		//字体颜色
		cc.fillStyle = color;
		cc.font = font.style + ' normal ' + font.weight + ' ' + font.size + 'px ' + font.family;
        cc.textAlign = 'center';
        cc.textBaseline = 'middle';
        //文字居中
        cc.fillText(text, c.width / 2, c.height / 2);
		
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
			size: font.size || '30', //TODO auto calculate the font size to response to the image size
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
