sixteen-seg.js
======
16セグメントディスプレイを描画するJavaScriptライブラリです。

## 概要
* SVGによる16セグメントディスプレイの描画
* 他のライブラリに依存しません
* ASCIIの 20-7E の範囲の文字を標準で描画可能
* 字体をカスタマイズ可能
* 独自の字体を登録可能

## 簡単な使い方
```HTML
<html>
<script src="sixteen-seg.js"></script>
<body>
<div style="display: inline-block; background-color: Black;">
	<div id="seg16ins" style="width:57px; height:80px;"></div>
</div>
<script>
var seg16 = new Seg16("seg16ins");
seg16.draw({value : "A."});
</script>
</body>
</html>
```

## その他のオプション
詳しくは次のURLを参照  
http://risaiku.net/archives/1412/

## ライセンス等
MIT License  
Copyright 2014, risaiku  
http://risaiku.net  
https://github.com/risaiku/sixteen-seg.js

