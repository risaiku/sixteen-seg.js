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

function sixteenSeg() {
	
};

sixteenSeg.SVGNS   = "http://www.w3.org/2000/svg";
sixteenSeg.XLINKNS = "http://www.w3.org/1999/xlink";

sixteenSeg.CODE_SEG_TABLE = [];
sixteenSeg.CODE_SEG_TABLE[ 32] = 0x00000; // ' '(0x20)
sixteenSeg.CODE_SEG_TABLE[ 33] = 0x13000; // '!'(0x21)
sixteenSeg.CODE_SEG_TABLE[ 34] = 0x02040; // '"'(0x22)
sixteenSeg.CODE_SEG_TABLE[ 35] = 0x00f55; // '#'(0x23)
sixteenSeg.CODE_SEG_TABLE[ 36] = 0x0dd55; // '$'(0x24)
sixteenSeg.CODE_SEG_TABLE[ 37] = 0x09977; // '%'(0x25)
sixteenSeg.CODE_SEG_TABLE[ 38] = 0x09ec9; // '&'(0x26)
sixteenSeg.CODE_SEG_TABLE[ 39] = 0x00040; // '''(0x27)
sixteenSeg.CODE_SEG_TABLE[ 40] = 0x00028; // '('(0x28)
sixteenSeg.CODE_SEG_TABLE[ 41] = 0x00082; // ')'(0x29)
sixteenSeg.CODE_SEG_TABLE[ 42] = 0x000ff; // '*'(0x2a)
sixteenSeg.CODE_SEG_TABLE[ 43] = 0x00055; // '+'(0x2b)
sixteenSeg.CODE_SEG_TABLE[ 44] = 0x00002; // ','(0x2c)
sixteenSeg.CODE_SEG_TABLE[ 45] = 0x00011; // '-'(0x2d)
sixteenSeg.CODE_SEG_TABLE[ 46] = 0x10000; // '.'(0x2e)
sixteenSeg.CODE_SEG_TABLE[ 47] = 0x00022; // '/'(0x2f)
sixteenSeg.CODE_SEG_TABLE[ 48] = 0x0ff22; // '0'(0x30)
sixteenSeg.CODE_SEG_TABLE[ 49] = 0x03020; // '1'(0x31)
sixteenSeg.CODE_SEG_TABLE[ 50] = 0x0ee11; // '2'(0x32)
sixteenSeg.CODE_SEG_TABLE[ 51] = 0x0fc11; // '3'(0x33)
sixteenSeg.CODE_SEG_TABLE[ 52] = 0x03111; // '4'(0x34)
sixteenSeg.CODE_SEG_TABLE[ 53] = 0x0dd11; // '5'(0x35)
sixteenSeg.CODE_SEG_TABLE[ 54] = 0x0df11; // '6'(0x36)
sixteenSeg.CODE_SEG_TABLE[ 55] = 0x0f100; // '7'(0x37)
sixteenSeg.CODE_SEG_TABLE[ 56] = 0x0ff11; // '8'(0x38)
sixteenSeg.CODE_SEG_TABLE[ 57] = 0x0fd11; // '9'(0x39)
sixteenSeg.CODE_SEG_TABLE[ 58] = 0x00044; // ':'(0x3a)
sixteenSeg.CODE_SEG_TABLE[ 59] = 0x00042; // ';'(0x3b)
sixteenSeg.CODE_SEG_TABLE[ 60] = 0x00029; // '<'(0x3c)
sixteenSeg.CODE_SEG_TABLE[ 61] = 0x00c11; // '='(0x3d)
sixteenSeg.CODE_SEG_TABLE[ 62] = 0x00092; // '>'(0x3e)
sixteenSeg.CODE_SEG_TABLE[ 63] = 0x1e014; // '?'(0x3f)
sixteenSeg.CODE_SEG_TABLE[ 64] = 0x0ef30; // '@'(0x40)
sixteenSeg.CODE_SEG_TABLE[ 65] = 0x0f311; // 'A'(0x41)
sixteenSeg.CODE_SEG_TABLE[ 66] = 0x0fc54; // 'B'(0x42)
sixteenSeg.CODE_SEG_TABLE[ 67] = 0x0cf00; // 'C'(0x43)
sixteenSeg.CODE_SEG_TABLE[ 68] = 0x0fc44; // 'D'(0x44)
sixteenSeg.CODE_SEG_TABLE[ 69] = 0x0cf11; // 'E'(0x45)
sixteenSeg.CODE_SEG_TABLE[ 70] = 0x0c311; // 'F'(0x46)
sixteenSeg.CODE_SEG_TABLE[ 71] = 0x0df10; // 'G'(0x47)
sixteenSeg.CODE_SEG_TABLE[ 72] = 0x03311; // 'H'(0x48)
sixteenSeg.CODE_SEG_TABLE[ 73] = 0x0cc44; // 'I'(0x49)
sixteenSeg.CODE_SEG_TABLE[ 74] = 0x03e00; // 'J'(0x4a)
sixteenSeg.CODE_SEG_TABLE[ 75] = 0x00329; // 'K'(0x4b)
sixteenSeg.CODE_SEG_TABLE[ 76] = 0x00f00; // 'L'(0x4c)
sixteenSeg.CODE_SEG_TABLE[ 77] = 0x033a4; // 'M'(0x4d)
sixteenSeg.CODE_SEG_TABLE[ 78] = 0x03388; // 'N'(0x4e)
sixteenSeg.CODE_SEG_TABLE[ 79] = 0x0ff00; // 'O'(0x4f)
sixteenSeg.CODE_SEG_TABLE[ 80] = 0x0e311; // 'P'(0x50)
sixteenSeg.CODE_SEG_TABLE[ 81] = 0x0ff08; // 'Q'(0x51)
sixteenSeg.CODE_SEG_TABLE[ 82] = 0x0e319; // 'R'(0x52)
sixteenSeg.CODE_SEG_TABLE[ 83] = 0x0dd11; // 'S'(0x53)
sixteenSeg.CODE_SEG_TABLE[ 84] = 0x0c044; // 'T'(0x54)
sixteenSeg.CODE_SEG_TABLE[ 85] = 0x03f00; // 'U'(0x55)
sixteenSeg.CODE_SEG_TABLE[ 86] = 0x00322; // 'V'(0x56)
sixteenSeg.CODE_SEG_TABLE[ 87] = 0x0334a; // 'W'(0x57)
sixteenSeg.CODE_SEG_TABLE[ 88] = 0x000aa; // 'X'(0x58)
sixteenSeg.CODE_SEG_TABLE[ 89] = 0x02115; // 'Y'(0x59)
sixteenSeg.CODE_SEG_TABLE[ 90] = 0x0cc22; // 'Z'(0x5a)
sixteenSeg.CODE_SEG_TABLE[ 91] = 0x04844; // '['(0x5b)
sixteenSeg.CODE_SEG_TABLE[ 92] = 0x00088; // '\'(0x5c)
sixteenSeg.CODE_SEG_TABLE[ 93] = 0x08444; // ']'(0x5d)
sixteenSeg.CODE_SEG_TABLE[ 94] = 0x0000a; // '^'(0x5e)
sixteenSeg.CODE_SEG_TABLE[ 95] = 0x00c00; // '_'(0x5f)
sixteenSeg.CODE_SEG_TABLE[ 96] = 0x00080; // '`'(0x60)
sixteenSeg.CODE_SEG_TABLE[ 97] = 0x0060d; // 'a'(0x61)
sixteenSeg.CODE_SEG_TABLE[ 98] = 0x00705; // 'b'(0x62)
sixteenSeg.CODE_SEG_TABLE[ 99] = 0x00601; // 'c'(0x63)
sixteenSeg.CODE_SEG_TABLE[100] = 0x00645; // 'd'(0x64)
sixteenSeg.CODE_SEG_TABLE[101] = 0x00603; // 'e'(0x65)
sixteenSeg.CODE_SEG_TABLE[102] = 0x04055; // 'f'(0x66)
sixteenSeg.CODE_SEG_TABLE[103] = 0x08545; // 'g'(0x67)
sixteenSeg.CODE_SEG_TABLE[104] = 0x00305; // 'h'(0x68)
sixteenSeg.CODE_SEG_TABLE[105] = 0x00004; // 'i'(0x69)
sixteenSeg.CODE_SEG_TABLE[106] = 0x00644; // 'j'(0x6a)
sixteenSeg.CODE_SEG_TABLE[107] = 0x0006c; // 'k'(0x6b)
sixteenSeg.CODE_SEG_TABLE[108] = 0x00044; // 'l'(0x6c)
sixteenSeg.CODE_SEG_TABLE[109] = 0x01215; // 'm'(0x6d)
sixteenSeg.CODE_SEG_TABLE[110] = 0x00205; // 'n'(0x6e)
sixteenSeg.CODE_SEG_TABLE[111] = 0x00605; // 'o'(0x6f)
sixteenSeg.CODE_SEG_TABLE[112] = 0x08341; // 'p'(0x70)
sixteenSeg.CODE_SEG_TABLE[113] = 0x08145; // 'q'(0x71)
sixteenSeg.CODE_SEG_TABLE[114] = 0x00201; // 'r'(0x72)
sixteenSeg.CODE_SEG_TABLE[115] = 0x08505; // 's'(0x73)
sixteenSeg.CODE_SEG_TABLE[116] = 0x00015; // 't'(0x74)
sixteenSeg.CODE_SEG_TABLE[117] = 0x00604; // 'u'(0x75)
sixteenSeg.CODE_SEG_TABLE[118] = 0x00202; // 'v'(0x76)
sixteenSeg.CODE_SEG_TABLE[119] = 0x0120a; // 'w'(0x77)
sixteenSeg.CODE_SEG_TABLE[120] = 0x000aa; // 'x'(0x78)
sixteenSeg.CODE_SEG_TABLE[121] = 0x000a4; // 'y'(0x79)
sixteenSeg.CODE_SEG_TABLE[122] = 0x00403; // 'z'(0x7a)
sixteenSeg.CODE_SEG_TABLE[123] = 0x04845; // '{'(0x7b)
sixteenSeg.CODE_SEG_TABLE[124] = 0x00044; // '|'(0x7c)
sixteenSeg.CODE_SEG_TABLE[125] = 0x08454; // '}'(0x7d)
sixteenSeg.CODE_SEG_TABLE[126] = 0x0a150; // '~'(0x7e)

sixteenSeg.DEFAULT_OPTION = {
	value    : "",          // 表示するデータ
	bgColor  : "black",
	colorOn  : "red",
	colorOff : "#320000",
	digit    : -1,          // 正の値が設定された場合は桁数指定
	mergeDot : true,        // 次の文字がドットの場合、前の文字のドットを点灯させる
	slant    : 0            // 傾き
};

sixteenSeg.charToCode = function(char, pos) {
	if (pos >= char.length) {
		return 0x20;
	}
	var charCode = char.charCodeAt(pos);
	if (!sixteenSeg.CODE_SEG_TABLE[charCode]) {
		return 0x20;
	}
	return charCode;
};

sixteenSeg.createElementUse = function(x, y, scaleX, scaleY, id, idx, segOnOff, colorOn, colorOff) {
	var use = document.createElementNS(sixteenSeg.SVGNS, "use");
	use.setAttribute("x", x);
	use.setAttribute("y", y);
	if (scaleX != 1 || scaleY != 1) {
		use.setAttribute("transform", "scale(" + scaleX + ", " + scaleY + ")");
	}
	use.setAttributeNS(sixteenSeg.XLINKNS, "href", id);
	sixteenSeg.setStyleUse(use, idx, segOnOff, colorOn, colorOff);
	return use;
};

sixteenSeg.setStyleUse = function(use, segIdx, segOnOff, colorOn, colorOff) {
	var pos = 0x10000 >> segIdx + 1;
	if ((segOnOff & pos) == pos) {
		use.setAttribute("style", "fill:" + colorOn);
	} else {
		use.setAttribute("style", "fill:" + colorOff);
	}
};

sixteenSeg.createElementCircle = function(x, y, r, segOnOff, colorOn, colorOff) {
	var circle = document.createElementNS(sixteenSeg.SVGNS, "circle");
	circle.setAttribute("cx", 52);
	circle.setAttribute("cy", 75);
	circle.setAttribute("r" , 5);
	sixteenSeg.setStyleCircle(circle, segOnOff, colorOn, colorOff);
	return circle;
};

sixteenSeg.setStyleCircle = function(circle, segOnOff, colorOn, colorOff) {
	if ((segOnOff & 0x10000) == 0x10000) {
		circle.setAttribute("style", "fill:" + colorOn);
	} else {
		circle.setAttribute("style", "fill:" + colorOff);
	}
};

sixteenSeg.createElementPolyline = function(id, points) {
	var polyline = document.createElementNS(sixteenSeg.SVGNS, "polyline");
	polyline.id = id;
	polyline.setAttribute("points", points);
	return polyline;
};

sixteenSeg.getOption = function(option, key) {
	return key in option ? option[key] : sixteenSeg.DEFAULT_OPTION[key];
};

sixteenSeg.getSegArray = function(value, mergeDot) {
	var buf = [],idx=0,i,ret;
	for (i = 0; i , i < value.length; i++) {
		buf[i] = sixteenSeg.CODE_SEG_TABLE[parseInt(sixteenSeg.charToCode(value, i))];
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
};

sixteenSeg.prototype = {
	draw : function(id, option) {
		var bgColor   = sixteenSeg.getOption(option, "bgColor");
		var digit     = sixteenSeg.getOption(option, "digit");
		var slant     = sixteenSeg.getOption(option, "slant");
		this.colorOn  = sixteenSeg.getOption(option, "colorOn");
		this.colorOff = sixteenSeg.getOption(option, "colorOff");
		this.mergeDot = sixteenSeg.getOption(option, "mergeDot");

		var segArray = sixteenSeg.getSegArray(option.value.toString(), this.mergeDot);
		var charLen  = segArray.length;
		var loopCnt  = digit == -1 ? charLen : digit;
		var widthP   = 100 / loopCnt;
		var colorOn  = this.colorOn, colorOff = this.colorOff;
		this.target  = document.getElementById(id);

		for (var i = 0; i < loopCnt; i++) {
			var segOnOff = segArray[i];
			var segIdx   = 0;

			var container = document.createElement("div");
			container.setAttribute("style", "display: inline-block; height: 100%; width: " + widthP + "%;");

			var svg = document.createElementNS(sixteenSeg.SVGNS, "svg");
			svg.setAttribute("viewBox", "0 0 57 80");
			svg.setAttribute("style", "background-color:" + bgColor + ";display: inline-block; overflow: hidden; stroke-width: 0; height: 100%; width: 100%;");

			container.appendChild(svg);
			this.target.appendChild(container);

			var defs = document.createElementNS(sixteenSeg.SVGNS, "defs");
			defs.appendChild(sixteenSeg.createElementPolyline("h", "9 0, 24 0, 24 8, 9 8, 5 4"         ));
			defs.appendChild(sixteenSeg.createElementPolyline("v", "0 9, 4 5, 8 9, 8 34, 4 38, 0 34"   ));
			defs.appendChild(sixteenSeg.createElementPolyline("b", "0 0, 7 0, 7 25, 0 25"              ));
			defs.appendChild(sixteenSeg.createElementPolyline("c", "0 0, 3 0, 11 16, 11 25, 7 25, 0 11"));
			svg.appendChild(defs);

			svg.appendChild(sixteenSeg.createElementCircle(52, 75, 5, segOnOff, colorOn, colorOff));

			var g = document.createElementNS(sixteenSeg.SVGNS, "g");
			g.appendChild(sixteenSeg.createElementUse(  0,   0,  1,  1, "#h", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-49,   0, -1,  1, "#h", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-49,   0, -1,  1, "#v", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-49, -78, -1, -1, "#v", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-49,  70, -1,  1, "#h", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(  0,  70,  1,  1, "#h", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(  0, -78,  1, -1, "#v", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(  0,   0,  1,  1, "#v", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(  9,   9,  1,  1, "#c", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse( 21,   9,  1,  1, "#b", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-40,   9, -1,  1, "#c", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-49,  35, -1,  1, "#h", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(-40, -69, -1, -1, "#c", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse( 21,  44,  1,  1, "#b", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(  9, -69,  1, -1, "#c", segIdx++, segOnOff, colorOn, colorOff));
			g.appendChild(sixteenSeg.createElementUse(  0,  35,  1,  1, "#h", segIdx++, segOnOff, colorOn, colorOff));
			if (slant != 0) {
				g.setAttribute("transform", "skewX(" + (-slant) + ")");
			}
			svg.appendChild(g);
		}
	},

	setValue : function(value) {
		var i, target = this.target, colorOn = this.colorOn, colorOff = this.colorOff;
		var segArray = sixteenSeg.getSegArray(value, this.mergeDot);
		var charLen  = segArray.length;
		for (i = 0; i < target.childNodes.length; i++) {
			var j, segIdx = 0, segOnOff = segArray[i];

			var circle = target.childNodes[i].childNodes[0].childNodes[1];
			sixteenSeg.setStyleCircle(circle, segOnOff, colorOn, colorOff);

			var uses = target.childNodes[i].childNodes[0].childNodes[2].childNodes;
			for (j = 0; j < uses.length; j++) {
				sixteenSeg.setStyleUse(uses[j], j, segOnOff, colorOn, colorOff);
			}
		}
	}
};
