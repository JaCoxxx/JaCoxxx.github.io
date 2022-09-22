$(".btn").on("click", (e) => {
  window.location.href = "blog";
});

let h = $(document).height(),
  w = $(document).width(),
  cw = w,
  ch = h,
  maxorbit = 255,
  centery = ch / 2,
  centerx = cw / 2;

let stars = [],
  collapse = false,
  expanse = false;

let canvas = $("<canvas/>")
    .attr({
      width: cw,
      height: ch,
    })
    .appendTo("body"),
  context = canvas.get(0).getContext("2d");

context.globalCompositeOperation = "multiply";

function setDPI(canvas, dpi) {
  // Set up CSS size if it's not set up already
  if (!canvas.get(0).style.width)
    canvas.get(0).style.width = canvas.get(0).width + "px";
  if (!canvas.get(0).style.height)
    canvas.get(0).style.height = canvas.get(0).height + "px";

  let scaleFactor = dpi / 96;
  canvas.get(0).width = Math.ceil(canvas.get(0).width * scaleFactor);
  canvas.get(0).height = Math.ceil(canvas.get(0).height * scaleFactor);
  let ctx = canvas.get(0).getContext("2d");
  ctx.scale(scaleFactor, scaleFactor);
}

setDPI(canvas, 192);

const star = function () {
  let rands = [];
  rands.push(Math.random() * (maxorbit / 2) + 1);
  rands.push(Math.random() * (maxorbit / 2) + maxorbit);

  this.orbital =
    rands.reduce(function (p, c) {
      return p + c;
    }, 0) / rands.length;

  this.x = centerx;
  this.y = centery + this.orbital;

  this.speed = Math.floor(Math.random() * 1.5) + 0.5;
  this.rotation = Math.floor(Math.random() * 360) + 1;

  this.id = stars.length;

  this.collapseBonus = this.orbital - maxorbit * 0.7;
  if (this.collapseBonus < 0) {
    this.collapseBonus = 0;
  }

  stars.push(this);
  this.color = "rgba(255,255,255," + (1 - this.orbital / 255) + ")";
};
star.prototype.draw = function () {
  if (expanse == false) {
    this.rotation += this.speed;
    if (collapse == false) {
      if (this.y > centery + this.orbital) {
        this.y -= 2;
      }
      if (this.y < centery + this.orbital - 4) {
        this.y += 2;
      }
    } else {
      if (this.y > centery + maxorbit / 2 + this.collapseBonus) {
        this.y -= 2;
      }
      if (this.y < centery + maxorbit / 2 + this.collapseBonus - 4) {
        this.y += 2;
      }
    }
  } else {
    this.rotation += this.speed / 2;
    if (this.y > centery + (this.id % 100) * -10) {
      this.y -= 4;
    }
  }

  context.save();
  context.fillStyle = this.color;
  context.translate(cw / 2, ch / 2);
  context.rotate((this.rotation * Math.PI) / 180);
  context.translate(-cw / 2, -ch / 2);
  context.fillRect(this.x, this.y, 1, 1);
  context.fill();
  context.restore();
};

$(".enter-btn").on("click", function () {
  $(this).addClass("enter-btn-scale");
  collapse = false;
  expanse = true;

  setTimeout(() => {
    $(this).addClass("hidden");
    $(".container").removeClass("hidden");
  }, 500);
});
$(".enter-btn").on("mouseover", function () {
  if (expanse == false) {
    collapse = true;
  }
});
$(".enter-btn").on("mouseout", function () {
  if (expanse == false) {
    collapse = false;
  }
});

window.requestFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function update() {}

function loop() {
  context.fillStyle = "rgba(25,25,25,0.1)";
  context.fillRect(0, 0, cw, ch);

  for (let i = 0; i < stars.length; i++) {
    if (stars[i] != stars) {
      stars[i].draw();
    }
  }

  update();
  requestFrame(loop);
}

function init(time) {
  context.fillStyle = "rgba(25,25,25,0)";
  context.fillRect(0, 0, cw, ch);
  for (let i = 0; i < 2500; i++) {
    new star();
  }
  loop();
}
init();
