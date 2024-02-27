// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });

  animate();
}

function animate() {
  tl.set(["#main-container, #banner"], { autoAlpha: 1, force3D: true });
  tl.set(["#photo1, #photo2"], { rotationZ: 0.1, force3D: true });
  tl.set(["#photo2"], { x: -300 });
  tl.addLabel('frame_1', 0)
    // .to(photo1, 1, {autoAlpha:1, ease: 'power4.inOut', }, "frame_1")
    .to(photo1, 1, { x: "0", autoAlpha: 1, ease: "none" }, "frame_1")
    .to(copy1, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out", }, "frame_1+=0.5")
    .to(photo1, 3, { scale: 1.15, x: '-5', y: '10', autoAlpha: 1, ease: "none" }, "frame_1+=1")
    .to(copy1, 0.5, { x: '-120', autoAlpha: 0, ease: "power1.out", }, "frame_1+=3");

  tl.addLabel('frame_2', 3.5)
    .to(copy2, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out", }, "frame_2")
    // .to(photo1, 1, {autoAlpha:0, ease: 'power4.inOut', }, "frame_2")
    .to(photo2, 0.8, { autoAlpha: 1, x: "0", ease: "none" }, "frame_2")
    .to(green_angle, 0.5, { autoAlpha: 1, ease: "power1.out", y: '0' }, "frame_2")
    .to(photo2, 5.5, { scale: 1.15, x: '-15', y: '-10', autoAlpha: 1, ease: "none" }, "frame_2+=0.8")
    // .to(copy2, 0.5, {x:'-120', autoAlpha:0, ease: "power1.out", }, "frame_2+=3")

  tl.addLabel('frame_3', 7)
    // .to(copy3, 0.5, {left:15, autoAlpha:1, ease: "power1.out", }, "frame_3")
    // .staggerTo(["#cta"], 0.2, { bottom: 20, autoAlpha: 1, ease: "power1.out", }, "frame_3+=0.25")
    .to(["#cta"], 0.3, { bottom: 30, autoAlpha: 1, ease: "power1.out", }, "frame_3")
    .to(copy2, 0.5, { y: '-20', autoAlpha: 0, ease: "Power4.linear", }, "frame_3+=0.3")
    .to(copy3, 0, { left: 15, y: '-20', autoAlpha: 1, ease: "Power4.linear", }, "frame_3+=0.8")
    .to(copy3, 0.5, { left: 15, y: '0', autoAlpha: 1, ease: "Power4.linear", }, "frame_3+=0.8")
    .to(["#cta"], 0.3, { bottom: 20, autoAlpha: 1, ease: "power1.out", }, "frame_3+=1.2")
    .to(terms, { autoAlpha: 1 })
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}



// var startTime;

// var tl;

// function init() {
//   startTime = new Date();

//   tl = new TimelineMax({ onComplete: endTime });

//   animate();
// }

// function animate() {
//   tl.set(["#main-container, #banner"], { autoAlpha: 1, force3D: true });

//   tl.to(photo1, 1, { autoAlpha: 1, ease: "power4.inOut" }, "0.2");

//   tl.to(copy1, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out" }, "+=0.2");
//   tl.to(copy1, 0.5, { x: "-120", autoAlpha: 0, ease: "power1.out" }, "+=1.8");

//   tl.to(copy2, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out" }, "+=0.7");
//   tl.to(photo1, 1, { autoAlpha: 0, ease: "power4.inOut" }, "<");
//   tl.to(photo2, 1, { autoAlpha: 1, ease: "power4.inOut" }, "<");
//   tl.to(
//     green_angle,
//     0.5,
//     { autoAlpha: 1, ease: "power1.out", y: "0" },
//     "-=0.6"
//   );
//   tl.to(copy2, 0.5, { x: "-120", autoAlpha: 0, ease: "power1.out" }, "+=1.8");

//   tl.to(copy3, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out" }, "+=1.9");
//   tl.to(["#cta"], 0.5, { bottom: 20, autoAlpha: 1, ease: "power1.out" }, "<");
//   tl.to(terms, { autoAlpha: 1 });
// }

// function endTime() {
//   var endTime = new Date();
//   console.log(
//     "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
//   );
// }
