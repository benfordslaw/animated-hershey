# animated-hershey.js

Animated version of [Lingdong's p5.hershey.js](https://github.com/LingDong-/p5-hershey-js) for p5.js

[Online demo here](https://benfordslaw.github.io/animated-hershey)

### Basic usage
```javascript
P5.animatedHershey.putText([animationStartTime], [textIsAnimated], [text], {
  cmap: [hersheyFontcmap],
  align: [alignment]
});

//immediately animate "Hello, world!" centered in the 'plain' hershey font
P5.animatedHershey.putText(millis(), true, "Hello, world!", {
  cmap: FONT_HERSHEY.PLAIN,
  align: "center"
});

//write "Hello, world!" as Lingdong's program would
P5.animatedHershey.putText(null, false, "Hello, world!", {
  cmap: FONT_HERSHEY.PLAIN,
  align: "center"
});
```
