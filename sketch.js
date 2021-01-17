var textInput, fontSelector, speedSlider;
var animationProg = false;
var inputtedText;

function setup() {
  var theCanvas = createCanvas(windowWidth - 50, windowHeight/4 - 50);
  var x = (windowWidth - width) / 2;
  var y = height/2 + 60;
  theCanvas.position(x,y);
  
  noFill();
  stroke("black");
  strokeWeight(1);
  strokeJoin(ROUND);
  
  createElement(
    "p",
    "Input Text: "
  ).position(20, 20);
  textInput = createInput().size(300);
  textInput.position(20, 60);

  var listenButton = createButton("Write");
  listenButton.position(textInput.x + textInput.width + 10, textInput.y);
  listenButton.mousePressed(animateInput);
  
  createElement(
    "p",
    "Font Selection: "
  ).position(listenButton.x + listenButton.width + 50, 20);
  fontSelector = createSelect();
  fontSelector.option("PLAIN");
  fontSelector.option("SIMPLEX");
  fontSelector.option("SCRIPT_SIMPLEX");
  fontSelector.position(listenButton.x + listenButton.width + 50, textInput.y);
  
  createElement(
    "p",
    "Drawing Speed: "
  ).position(fontSelector.x + 200, 20);
  speedSlider = createSlider(1, 99, 50).size(100);
  speedSlider.position(fontSelector.x + 200, textInput.y);

}

function animateInput() {
  animationProg = true;
  inputtedText = textInput.value();
  P5.animatedHershey.reset(1 - (speedSlider.value() / 100));
}

function hersheyText(msg, x, y) {
  push();
  translate(x, y);
  scale(2);
  switch(fontSelector.value()){
    case "PLAIN": 
      P5.animatedHershey.putText(millis(), true, msg, {
        cmap: FONT_HERSHEY.PLAIN,
        align: "center"
      });
      break;
    case "SIMPLEX":
      P5.animatedHershey.putText(millis(), true, msg, {
        cmap: FONT_HERSHEY.SIMPLEX,
        align: "center"
      });
      break;
    case "SCRIPT_SIMPLEX":
      P5.animatedHershey.putText(millis(), true, msg, {
        cmap: FONT_HERSHEY.SCRIPT_SIMPLEX,
        align: "center"
      });
      break;
  }

  pop();
}

function draw() {
  background("white");
  
  if(animationProg){
    hersheyText(inputtedText, width/2, height/2);
  }
}

//leave this stuff here and don't worry about it. It's just here to make this code editor recognize p5 functions
/* global alpha, blue, brightness, CENTER, color, green, hue, lerpColor, lightness, red, saturation, p5.Color, Setting, background, clear, colorMode, fill, noFill, noStroke, stroke, erase, noErase, arc, ellipse, circle, line, point, quad, rect, square, triangle, ellipseMode, noSmooth, rectMode, smooth, strokeCap, strokeJoin, strokeWeight, bezier, bezierDetail, bezierPoint, bezierTangent, curve, curveDetail, curveTightness, curvePoint, curveTangent, beginContour, beginShape, bezierVertex, curveVertex, endContour, endShape, quadraticVertex, vertex, plane, box, sphere, cylinder, cone, ellipsoid, torus, loadModel, model, HALF_PI, PI, QUARTER_PI, TAU, TWO_PI, DEGREES, RADIANS, print, frameCount, deltaTime, focused, cursor, frameRate, noCursor, displayWidth, displayHeight, windowWidth, windowHeight, windowResized, width, height, fullscreen, pixelDensity, displayDensity, getURL, getURLPath, getURLParams, preload, setup, draw, remove, disableFriendlyErrors, noLoop, loop, isLooping, push, pop, redraw, p5, DOM, p5.Element, select, selectAll, removeElements, changed, input, createDiv, createP, createSpan, createImg, createA, createSlider, createButton, createCheckbox, createSelect, createRadio, createColorPicker, createInput, createFileInput, createVideo, createAudio, createCapture, createElement, p5.MediaElement, p5.File, p5.Graphics, createCanvas, resizeCanvas, noCanvas, createGraphics, blendMode, drawingContext, setAttributes, console, applyMatrix, resetMatrix, rotate, rotateX, rotateY, rotateZ, scale, shearX, shearY, translate, LocalStorage, storeItem, getItem, clearStorage, removeItem, createStringDict, createNumberDict, p5.TypedDict, p5.NumberDict, append, arrayCopy, concat, reverse, shorten, shuffle, sort, splice, subset, float, int, str, boolean, byte, char, unchar, hex, unhex, join, match, matchAll, nf, nfc, nfp, nfs, split, splitTokens, trim, deviceOrientation, accelerationX, accelerationY, accelerationZ, pAccelerationX, pAccelerationY, pAccelerationZ, rotationX, rotationY, rotationZ, pRotationX, pRotationY, pRotationZ, turnAxis, setMoveThreshold, setShakeThreshold, deviceMoved, deviceTurned, deviceShaken, Keyboard, keyIsPressed, key, keyCode, keyPressed, keyReleased, keyTyped, keyIsDown, Mouse, movedX, movedY, mouseX, mouseY, pmouseX, pmouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed, mouseMoved, mouseDragged, mousePressed, mouseReleased, mouseClicked, doubleClicked, mouseWheel, requestPointerLock, exitPointerLock, touches, touchStarted, touchMoved, touchEnded, createImage, saveCanvas, saveFrames, p5.Image, loadImage, image, tint, noTint, imageMode, Pixels, pixels, blend, copy, filter, get, loadPixels, set, updatePixels, IO, loadJSON, loadStrings, loadTable, loadXML, loadBytes, httpGet, httpPost, httpDo, p5.XML, createWriter, p5.PrintWriter, save, saveJSON, saveStrings, saveTable, Table, p5.Table, p5.TableRow, day, hour, minute, millis, month, second, year, Math, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt, fract, Vector, createVector, p5.Vector, noise, noiseDetail, noiseSeed, randomSeed, random, randomGaussian, Trigonometry, acos, asin, atan, atan2, cos, sin, tan, degrees, radians, angleMode, textAlign, textLeading, textSize, textStyle, textWidth, textAscent, textDescent, loadFont, text, textFont, p5.Font, orbitControl, debugMode, noDebugMode, ambientLight, specularColor, directionalLight, pointLight, lights, lightFalloff, spotLight, noLights, Material, loadShader, createShader, shader, resetShader, normalMaterial, texture, textureMode, textureWrap, ambientMaterial, emissiveMaterial, specularMaterial, shininess, p5.Geometry, p5.Shader, camera, perspective, ortho, frustum, createCamera, p5.Camera, setCamera*/
/* global P5, FONT_HERSHEY, RiTa, Tone */
