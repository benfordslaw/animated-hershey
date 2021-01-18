# animatedHershey.js

Animated version of [Lingdong's p5.hershey.js](https://github.com/LingDong-/p5-hershey-js) for p5.js

[Online demo here](https://benfordslaw.github.io/animated-hershey)

### Basic usage

Before writing, reset timing variables and initialize the speed (ranging from 0 to 1)
```javascript
P5.animatedHershey.reset([speed]);
```
General format for creating text
```javascript
P5.animatedHershey.putText([animationStartTime], [textIsAnimated], [text], {
  cmap: [hersheyFontcmap],
  align: [alignment]
});
```
Immediately animate "Hello, world!" centered in the 'plain' hershey font
```javascript
P5.animatedHershey.putText(millis(), true, "Hello, world!", {
  cmap: FONT_HERSHEY.PLAIN,
  align: "center"
});
```
Write "Hello, world!" as Lingdong's program would
```javascript
P5.animatedHershey.putText(null, false, "Hello, world!", {
  cmap: FONT_HERSHEY.PLAIN,
  align: "center"
});
```
