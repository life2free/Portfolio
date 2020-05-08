let loadStar = function () {
  "use strict";
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let homeDiv = document.querySelector(".home-div");
  let homeDivWidth = homeDiv.clientWidth || homeDiv.offsetWidth;
  let homeDivHeight = homeDiv.clientHeight || homeDiv.offsetHeight;
  let w = (canvas.width = homeDivWidth);
  let h = (canvas.height = homeDivHeight);
  // let w = (canvas.width = window.innerWidth);
  // let h = (canvas.height = window.innerHeight);
  let hue = 217;
  let stars = [];
  let count = 0;
  let maxStars = 1400;

  //   ctx.font = fsz + "px Arial";
  ctx.textBaseline = "middle"; //更改字号后，必须重置对齐方式，否则居中麻烦。设置文本的垂直对齐方式
  ctx.textAlign = "center";
  //   let tw = cxt.measureText(text).width;
  //   let ftop = c.height / 2 - 5;
  //   let fleft = c.width / 2;
  //cxt.fillStyle="#ff0000";
  //cxt.fillRect(fleft-tw/2,ftop-fsz/2,tw,fsz);//矩形在画布居中方式
  //cxt.fillStyle="#ffffff";
  //   ctx.fillText(text, fleft, ftop); //文本元素在画布居中方式
  ctx.strokeStyle = "white";
  //   ctx.strokeText(text, 0, 270); //文字边框

  ctx.font = "100px Arial";

  ctx.fillStyle = "#ffffff";
  //   ctx.textBaseline = "top";
  ctx.fillText("Keyboard Cat", 0, 270);

  // Thanks @jackrugile for the performance tip! http://codepen.io/jackrugile/pen/BjBGoM
  // Cache gradient
  let canvas2 = document.createElement("canvas");
  let ctx2 = canvas2.getContext("2d");
  canvas2.width = 100;
  canvas2.height = 100;
  let half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, "#fff");
  gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
  gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
  gradient2.addColorStop(1, "transparent");

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  // End cache

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      let hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let Star = function () {
    this.orbitRadius = random(w / 2 - 50);
    this.radius = random(100, this.orbitRadius) / 10;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 100000;
    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
  };

  Star.prototype.draw = function () {
    let x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX,
      y = (Math.cos(this.timePassed) * this.orbitRadius) / 2 + this.orbitY,
      twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    this.timePassed += this.speed;
  };

  for (let i = 0; i < maxStars; i++) {
    new Star();
  }

  function animation() {
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
    ctx.fillRect(0, 0, w, h);

    ctx.globalCompositeOperation = "lighter";
    for (let i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }

    window.requestAnimationFrame(animation);
  }

  animation();
};

// const loadMyScript = () => window.addEventListener("load", () => loadStar());
const loadMyScript = () => loadStar();
export default loadMyScript;
