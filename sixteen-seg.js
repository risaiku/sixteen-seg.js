//
// sixteen-seg.js
// v0.0 (beta)
//
// Copyright (c) 2014 risaiku
// This software is released under the MIT License.
//
// http://risaiku.net
// https://github.com/risaiku/sixteen-seg.js
//

function Seg16(id) {
	this.target = document.getElementById(id);
};

Seg16.SVGNS   = "http://www.w3.org/2000/svg";
Seg16.XLINKNS = "http://www.w3.org/1999/xlink";

Seg16.CODE_SEG_TABLE = [];
Seg16.CODE_SEG_TABLE[ 32] = 0x00000; // ' '(0x20)
Seg16.CODE_SEG_TABLE[ 33] = 0x13000; // '!'(0x21)
Seg16.CODE_SEG_TABLE[ 34] = 0x02040; // '"'(0x22)
Seg16.CODE_SEG_TABLE[ 35] = 0x00f55; // '#'(0x23)
Seg16.CODE_SEG_TABLE[ 36] = 0x0dd55; // '$'(0x24)
Seg16.CODE_SEG_TABLE[ 37] = 0x09977; // '%'(0x25)
Seg16.CODE_SEG_TABLE[ 38] = 0x09ec9; // '&'(0x26)
Seg16.CODE_SEG_TABLE[ 39] = 0x00040; // '''(0x27)
Seg16.CODE_SEG_TABLE[ 40] = 0x00028; // '('(0x28)
Seg16.CODE_SEG_TABLE[ 41] = 0x00082; // ')'(0x29)
Seg16.CODE_SEG_TABLE[ 42] = 0x000ff; // '*'(0x2a)
Seg16.CODE_SEG_TABLE[ 43] = 0x00055; // '+'(0x2b)
Seg16.CODE_SEG_TABLE[ 44] = 0x00002; // ','(0x2c)
Seg16.CODE_SEG_TABLE[ 45] = 0x00011; // '-'(0x2d)
Seg16.CODE_SEG_TABLE[ 46] = 0x10000; // '.'(0x2e)
Seg16.CODE_SEG_TABLE[ 47] = 0x00022; // '/'(0x2f)
Seg16.CODE_SEG_TABLE[ 48] = 0x0ff22; // '0'(0x30)
Seg16.CODE_SEG_TABLE[ 49] = 0x03020; // '1'(0x31)
Seg16.CODE_SEG_TABLE[ 50] = 0x0ee11; // '2'(0x32)
Seg16.CODE_SEG_TABLE[ 51] = 0x0fc11; // '3'(0x33)
Seg16.CODE_SEG_TABLE[ 52] = 0x03111; // '4'(0x34)
Seg16.CODE_SEG_TABLE[ 53] = 0x0dd11; // '5'(0x35)
Seg16.CODE_SEG_TABLE[ 54] = 0x0df11; // '6'(0x36)
Seg16.CODE_SEG_TABLE[ 55] = 0x0f100; // '7'(0x37)
Seg16.CODE_SEG_TABLE[ 56] = 0x0ff11; // '8'(0x38)
Seg16.CODE_SEG_TABLE[ 57] = 0x0fd11; // '9'(0x39)
Seg16.CODE_SEG_TABLE[ 58] = 0x00044; // ':'(0x3a)
Seg16.CODE_SEG_TABLE[ 59] = 0x00042; // ';'(0x3b)
Seg16.CODE_SEG_TABLE[ 60] = 0x00029; // '<'(0x3c)
Seg16.CODE_SEG_TABLE[ 61] = 0x00c11; // '='(0x3d)
Seg16.CODE_SEG_TABLE[ 62] = 0x00092; // '>'(0x3e)
Seg16.CODE_SEG_TABLE[ 63] = 0x1e014; // '?'(0x3f)
Seg16.CODE_SEG_TABLE[ 64] = 0x0ef30; // '@'(0x40)
Seg16.CODE_SEG_TABLE[ 65] = 0x0f311; // 'A'(0x41)
Seg16.CODE_SEG_TABLE[ 66] = 0x0fc54; // 'B'(0x42)
Seg16.CODE_SEG_TABLE[ 67] = 0x0cf00; // 'C'(0x43)
Seg16.CODE_SEG_TABLE[ 68] = 0x0fc44; // 'D'(0x44)
Seg16.CODE_SEG_TABLE[ 69] = 0x0cf11; // 'E'(0x45)
Seg16.CODE_SEG_TABLE[ 70] = 0x0c311; // 'F'(0x46)
Seg16.CODE_SEG_TABLE[ 71] = 0x0df10; // 'G'(0x47)
Seg16.CODE_SEG_TABLE[ 72] = 0x03311; // 'H'(0x48)
Seg16.CODE_SEG_TABLE[ 73] = 0x0cc44; // 'I'(0x49)
Seg16.CODE_SEG_TABLE[ 74] = 0x03e00; // 'J'(0x4a)
Seg16.CODE_SEG_TABLE[ 75] = 0x00329; // 'K'(0x4b)
Seg16.CODE_SEG_TABLE[ 76] = 0x00f00; // 'L'(0x4c)
Seg16.CODE_SEG_TABLE[ 77] = 0x033a4; // 'M'(0x4d)
Seg16.CODE_SEG_TABLE[ 78] = 0x03388; // 'N'(0x4e)
Seg16.CODE_SEG_TABLE[ 79] = 0x0ff00; // 'O'(0x4f)
Seg16.CODE_SEG_TABLE[ 80] = 0x0e311; // 'P'(0x50)
Seg16.CODE_SEG_TABLE[ 81] = 0x0ff08; // 'Q'(0x51)
Seg16.CODE_SEG_TABLE[ 82] = 0x0e319; // 'R'(0x52)
Seg16.CODE_SEG_TABLE[ 83] = 0x0dd11; // 'S'(0x53)
Seg16.CODE_SEG_TABLE[ 84] = 0x0c044; // 'T'(0x54)
Seg16.CODE_SEG_TABLE[ 85] = 0x03f00; // 'U'(0x55)
Seg16.CODE_SEG_TABLE[ 86] = 0x00322; // 'V'(0x56)
Seg16.CODE_SEG_TABLE[ 87] = 0x0334a; // 'W'(0x57)
Seg16.CODE_SEG_TABLE[ 88] = 0x000aa; // 'X'(0x58)
Seg16.CODE_SEG_TABLE[ 89] = 0x02115; // 'Y'(0x59)
Seg16.CODE_SEG_TABLE[ 90] = 0x0cc22; // 'Z'(0x5a)
Seg16.CODE_SEG_TABLE[ 91] = 0x04844; // '['(0x5b)
Seg16.CODE_SEG_TABLE[ 92] = 0x00088; // '\'(0x5c)
Seg16.CODE_SEG_TABLE[ 93] = 0x08444; // ']'(0x5d)
Seg16.CODE_SEG_TABLE[ 94] = 0x0000a; // '^'(0x5e)
Seg16.CODE_SEG_TABLE[ 95] = 0x00c00; // '_'(0x5f)
Seg16.CODE_SEG_TABLE[ 96] = 0x00080; // '`'(0x60)
Seg16.CODE_SEG_TABLE[ 97] = 0x0060d; // 'a'(0x61)
Seg16.CODE_SEG_TABLE[ 98] = 0x00705; // 'b'(0x62)
Seg16.CODE_SEG_TABLE[ 99] = 0x00601; // 'c'(0x63)
Seg16.CODE_SEG_TABLE[100] = 0x00645; // 'd'(0x64)
Seg16.CODE_SEG_TABLE[101] = 0x00603; // 'e'(0x65)
Seg16.CODE_SEG_TABLE[102] = 0x04055; // 'f'(0x66)
Seg16.CODE_SEG_TABLE[103] = 0x08545; // 'g'(0x67)
Seg16.CODE_SEG_TABLE[104] = 0x00305; // 'h'(0x68)
Seg16.CODE_SEG_TABLE[105] = 0x00004; // 'i'(0x69)
Seg16.CODE_SEG_TABLE[106] = 0x00644; // 'j'(0x6a)
Seg16.CODE_SEG_TABLE[107] = 0x0006c; // 'k'(0x6b)
Seg16.CODE_SEG_TABLE[108] = 0x00044; // 'l'(0x6c)
Seg16.CODE_SEG_TABLE[109] = 0x01215; // 'm'(0x6d)
Seg16.CODE_SEG_TABLE[110] = 0x00205; // 'n'(0x6e)
Seg16.CODE_SEG_TABLE[111] = 0x00605; // 'o'(0x6f)
Seg16.CODE_SEG_TABLE[112] = 0x08341; // 'p'(0x70)
Seg16.CODE_SEG_TABLE[113] = 0x08145; // 'q'(0x71)
Seg16.CODE_SEG_TABLE[114] = 0x00201; // 'r'(0x72)
Seg16.CODE_SEG_TABLE[115] = 0x08505; // 's'(0x73)
Seg16.CODE_SEG_TABLE[116] = 0x00015; // 't'(0x74)
Seg16.CODE_SEG_TABLE[117] = 0x00604; // 'u'(0x75)
Seg16.CODE_SEG_TABLE[118] = 0x00202; // 'v'(0x76)
Seg16.CODE_SEG_TABLE[119] = 0x0120a; // 'w'(0x77)
Seg16.CODE_SEG_TABLE[120] = 0x000aa; // 'x'(0x78)
Seg16.CODE_SEG_TABLE[121] = 0x000a4; // 'y'(0x79)
Seg16.CODE_SEG_TABLE[122] = 0x00403; // 'z'(0x7a)
Seg16.CODE_SEG_TABLE[123] = 0x04845; // '{'(0x7b)
Seg16.CODE_SEG_TABLE[124] = 0x00044; // '|'(0x7c)
Seg16.CODE_SEG_TABLE[125] = 0x08454; // '}'(0x7d)
Seg16.CODE_SEG_TABLE[126] = 0x0a150; // '~'(0x7e)

Seg16.DEFAULT_OPTION = {
	value    : "",          // 表示するデータ
	bgColor  : "black",
	colorOn  : "red",
	colorOff : "#320000",
	digit    : -1,          // 正の値が設定された場合は桁数指定
	mergeDot : true,        // 次の文字がドットの場合、前の文字のドットを点灯させる
	slant    : 0            // 傾き
};

Seg16.prototype = {
	draw : function(option) {
		var value     = this.__getOption(option, "value");
		var digit     = this.__getOption(option, "digit");
		var slant     = this.__getOption(option, "slant");
		var bgColor   = this.__getOption(option, "bgColor");
		this.colorOn  = this.__getOption(option, "colorOn");
		this.colorOff = this.__getOption(option, "colorOff");
		this.mergeDot = this.__getOption(option, "mergeDot");

		var segArray = this.__getSegArray(value.toString(), this.mergeDot);
		var charLen  = segArray.length;
		var loopCnt  = digit == -1 ? charLen : digit;
		var widthP   = 100 / loopCnt;

		for (var i = 0; i < loopCnt; i++) {
			var segOnOff = segArray[i];
			var segIdx   = 0;

			var container = document.createElement("div");
			container.setAttribute("style", "display: inline-block; height: 100%; width: " + widthP + "%;");

			var svg = document.createElementNS(Seg16.SVGNS, "svg");
			svg.setAttribute("viewBox", "0 0 57 80");
			svg.setAttribute("style", "background-color:" + bgColor + "; display: inline-block; overflow: hidden; stroke-width: 0; height: 100%; width: 100%;");

			container.appendChild(svg);
			this.target.appendChild(container);

			var defs = document.createElementNS(Seg16.SVGNS, "defs");
			defs.appendChild(this.__createElementPolyline("h", "9 0, 24 0, 24 8, 9 8, 5 4"         ));
			defs.appendChild(this.__createElementPolyline("v", "0 9, 4 5, 8 9, 8 34, 4 38, 0 34"   ));
			defs.appendChild(this.__createElementPolyline("b", "0 0, 7 0, 7 25, 0 25"              ));
			defs.appendChild(this.__createElementPolyline("c", "0 0, 3 0, 11 16, 11 25, 7 25, 0 11"));
			svg.appendChild(defs);

			svg.appendChild(this.__createElementCircle(52, 75, 5, segOnOff));

			var g = document.createElementNS(Seg16.SVGNS, "g");
			g.appendChild(this.__createElementUse(  0,   0,  1,  1, "#h", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-49,   0, -1,  1, "#h", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-49,   0, -1,  1, "#v", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-49, -78, -1, -1, "#v", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-49,  70, -1,  1, "#h", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(  0,  70,  1,  1, "#h", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(  0, -78,  1, -1, "#v", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(  0,   0,  1,  1, "#v", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(  9,   9,  1,  1, "#c", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse( 21,   9,  1,  1, "#b", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-40,   9, -1,  1, "#c", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-49,  35, -1,  1, "#h", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(-40, -69, -1, -1, "#c", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse( 21,  44,  1,  1, "#b", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(  9, -69,  1, -1, "#c", segIdx++, segOnOff));
			g.appendChild(this.__createElementUse(  0,  35,  1,  1, "#h", segIdx++, segOnOff));
			if (slant != 0) {
				g.setAttribute("transform", "skewX(" + (-slant) + ")");
			}
			svg.appendChild(g);
		}
	},

	changeValue : function(value) {
		var i, target = this.target;
		var segArray = this.__getSegArray(value, this.mergeDot);
		var charLen  = segArray.length;
		for (i = 0; i < target.childNodes.length; i++) {
			var j, segIdx = 0, segOnOff = segArray[i];

			var circle = target.childNodes[i].childNodes[0].childNodes[1];
			this.__setStyleCircle(circle, segOnOff);

			var uses = target.childNodes[i].childNodes[0].childNodes[2].childNodes;
			for (j = 0; j < uses.length; j++) {
				this.__setStyleUse(uses[j], j, segOnOff);
			}
		}
	},


	// 
	// private method
	// 

	__charToCode : function(char, pos) {
		if (pos >= char.length) {
			return 0x20;
		}
		var charCode = char.charCodeAt(pos);
		if (!Seg16.CODE_SEG_TABLE[charCode]) {
			return 0x20;
		}
		return charCode;
	},

	__createElementUse : function(x, y, scaleX, scaleY, refId, idx, segOnOff) {
		var use = document.createElementNS(Seg16.SVGNS, "use");
		use.setAttribute("x", x);
		use.setAttribute("y", y);
		if (scaleX != 1 || scaleY != 1) {
			use.setAttribute("transform", "scale(" + scaleX + ", " + scaleY + ")");
		}
		use.setAttributeNS(Seg16.XLINKNS, "href", refId);
		this.__setStyleUse(use, idx, segOnOff);
		return use;
	},

	__setStyleUse : function(use, segIdx, segOnOff) {
		var pos = 0x10000 >> segIdx + 1;
		var color;
		if ((segOnOff & pos) == pos) {
			color = this.colorOn;
		} else {
			color = this.colorOff;
		}
		use.setAttribute("style", "fill:" + color);
	},

	__createElementCircle : function(x, y, r, segOnOff) {
		var circle = document.createElementNS(Seg16.SVGNS, "circle");
		circle.setAttribute("cx", 52);
		circle.setAttribute("cy", 75);
		circle.setAttribute("r" , 5);
		this.__setStyleCircle(circle, segOnOff);
		return circle;
	},

	__setStyleCircle : function(circle, segOnOff) {
		var color;
		if ((segOnOff & 0x10000) == 0x10000) {
			color = this.colorOn;
		} else {
			color = this.colorOff;
		}
		circle.setAttribute("style", "fill:" + color);
	},

	__createElementPolyline : function(id, points) {
		var polyline = document.createElementNS(Seg16.SVGNS, "polyline");
		polyline.id = id;
		polyline.setAttribute("points", points);
		return polyline;
	},

	__getOption : function(option, key) {
		return key in option ? option[key] : Seg16.DEFAULT_OPTION[key];
	},

	__getSegArray : function(value, mergeDot) {
		var buf = [], idx=0, i, ret;
		for (i = 0; i , i < value.length; i++) {
			var code = this.__charToCode(value, i);
			buf[i] = Seg16.CODE_SEG_TABLE[code];
		}

		if (!mergeDot) {
			ret = buf;
		} else {
			ret = [];
			for (i = 0; i < buf.length; i++) {
				
				ret[idx] = buf[i];
				if (((buf[i] & 0x10000) != 0x10000) && buf[i+1] == 0x10000) {
					ret[idx] |= 0x10000;
					i++;
				}
				idx++;
			}
		}
		return ret;
	}
};
