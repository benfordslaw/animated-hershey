// Modified from Lingdong Huang's 2018 p5.hershey.js

var P5 = window;
var currentLetterIndex = 0;
var timeStore;
var startedWriting = false;
var speed;

P5.animatedHershey = {
  parseFontString: function(txt) {
    var lines = txt.split("\n");
    var result = {};
    for (var i = 0; i < lines.length; i++) {
      if (!lines[i].length) {
        continue;
      }
      var code = 1 * lines[i].slice(0, 5);
      var entry = lines[i].slice(5);
      result[code] = entry;
    }
    return result;
  },
  validateFont: function(font) {
    var invalid_indices = [];
    for (var k in font) {
      var entry = font[k];
      var cksum = 1 * entry.slice(0, 3);
      var coords = entry.slice(3);
      if (cksum * 2 != coords.length) {
        invalid_indices.push(k);
      }
    }
    return invalid_indices;
  },
  parseBound: function(entry) {
    var ordR = "R".charCodeAt(0);
    var bound = entry.slice(3, 5);
    var xmin = 1 * bound[0].charCodeAt(0) - ordR;
    var xmax = 1 * bound[1].charCodeAt(0) - ordR;
    return [xmin, xmax];
  },
  putChar: function(c, args) {
    if (args == undefined) {
      args = {};
    }
    if (args.font == undefined) {
      args.font = FONT_HERSHEY.DATA;
    }
    if (args.cmap == undefined) {
      args.cmap = FONT_HERSHEY.SIMPLEX;
    }
    if (args.noise == undefined) {
      args.noise = 0;
    }
    var ordR = "R".charCodeAt(0);
    // console.log(args.cmap(c.charCodeAt(0)))
    var entry = args.font[args.cmap(c.charCodeAt(0))];
    if (entry == undefined) {
      return 0;
    }
    var cksum = 1 * entry.slice(0, 3);
    var [xmin, xmax] = P5.animatedHershey.parseBound(entry);
    var content = entry.slice(5);
    P5.push();
    P5.translate(-xmin, 0);
    P5.beginShape();

    for (var i = 0; i < content.length; i += 2) {
      var digit = content.slice(i, i + 2);
      if (digit == " R") {
        P5.endShape();
        P5.beginShape();
      } else {
        var x = digit[0].charCodeAt(0) - ordR;
        var y = digit[1].charCodeAt(0) - ordR;
          P5.vertex(x, y);
        }
      }
      P5.endShape();
      P5.pop();
      return xmax - xmin;
  },
  putAnimatedChar: function(charStartTime, c, args) {
    if (args == undefined) {
      args = {};
    }
    if (args.font == undefined) {
      args.font = FONT_HERSHEY.DATA;
    }
    if (args.cmap == undefined) {
      args.cmap = FONT_HERSHEY.SIMPLEX;
    }
    if (args.noise == undefined) {
      args.noise = 0;
    }
    var ordR = "R".charCodeAt(0);
    // console.log(args.cmap(c.charCodeAt(0)))
    var entry = args.font[args.cmap(c.charCodeAt(0))];
    if (entry == undefined) {
      return 0;
    }
    var cksum = 1 * entry.slice(0, 3);
    var [xmin, xmax] = P5.animatedHershey.parseBound(entry);
    var content = entry.slice(5);
    P5.push();
    P5.translate(-xmin, 0);
    P5.beginShape();

    for (var i = 0; i < content.length; i += 2) {
      var digit = content.slice(i, i + 2);
      if (digit == " R") {
        P5.endShape();
        P5.beginShape();
      } else {
        var x = digit[0].charCodeAt(0) - ordR;
        var y = digit[1].charCodeAt(0) - ordR;
        if (P5.millis() - charStartTime > i * 50 * speed) {
          P5.vertex(x, y);
          if(i == content.length - 2){
            timeStore += P5.millis() - charStartTime;
            currentLetterIndex++;
          }
        }
      }
    }
    
    P5.endShape();
    P5.pop();
    return xmax - xmin;
  },
  putText: function(wordStartTime, activeWord, s, args) {
    if(!startedWriting){
      timeStore = wordStartTime;
      startedWriting = true;
    }
    
    if (args == undefined) {
      args = {};
    }
    if (args.align == undefined) {
      args.align = "left";
    }
    P5.push();
    if (args.align == "left") {
    } else if (args.align == "center") {
      P5.translate(-P5.animatedHershey.estimateTextWidth(s, args) / 2, 0);
    } else if (args.align == "right") {
      P5.translate(-P5.animatedHershey.estimateTextWidth(s, args), 0);
    }
    for (var i = 0; i < s.length; i++) {
      if(activeWord){
        if(i<currentLetterIndex){
          var x = P5.animatedHershey.putChar(s[i], args);
          P5.translate(x, 0);
        } else if(i==currentLetterIndex){
          if(s[i] != ' '){
            var x = P5.animatedHershey.putAnimatedChar(timeStore, s[i], args);
          } else {
            currentLetterIndex++;
          }
          P5.translate(x, 0);
        }
      } else{
        var x = P5.animatedHershey.putChar(s[i], args);
        P5.translate(x, 0);
      }
    }
    P5.pop();
  },
  estimateTextWidth: function(s, args) {
    if (args == undefined) {
      args = {};
    }
    if (args.font == undefined) {
      args.font = FONT_HERSHEY.DATA;
    }
    if (args.cmap == undefined) {
      args.cmap = FONT_HERSHEY.SIMPLEX;
    }
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
      var entry = args.font[args.cmap(s[i].charCodeAt(0))];
      if (entry == undefined) {
        return 0;
      }
      var [xmin, xmax] = P5.animatedHershey.parseBound(entry);
      sum += xmax - xmin;
    }
    return sum;
  },
  reset: function(speedSliderVal) {
    if(!speedSliderVal){
      speed = 1;
    } else {
      speed = speedSliderVal;
    }
    currentLetterIndex = 0;
    startedWriting = false;
  }
};
