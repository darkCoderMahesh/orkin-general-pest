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
  tl.set(["#photo1, #photo2, #photo3"], { rotationZ: 0.1, force3D: true });
  tl.set(["#photo2, #photo3"], { x: -300 });


  tl.addLabel('frame_1', 0)
    .to(photo1, 1, { x: "0", autoAlpha: 1, ease: "none" }, "frame_1")
    .to(copy1, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out", }, "frame_1+=0.5")
    .to(photo1, 3, { scale: 1.1, x: '-5', y: '10', autoAlpha: 1, ease: "none" }, "frame_1+=1")
    .to(copy1, 0.5, { x: '-120', autoAlpha: 0, ease: "power1.out", }, "frame_1+=3");

  tl.addLabel('frame_2', 3.5)
    .to(copy2, 0.5, { left: 15, autoAlpha: 1, ease: "power1.out", }, "frame_2")
    .to(photo2, 0.8, { x: "0", autoAlpha: 1, ease: "none" }, "frame_2")
    .to(photo2, 3, { scale: 1.1, x: '-5', y: '10', autoAlpha: 1, ease: "none" }, "frame_2+=0.8")
    .to(green_angle, 0.5, { autoAlpha: 1, ease: "power1.out", y: '0' }, "frame_2")


  tl.addLabel('frame_3', 7)
    .to(photo3, 0.8, { x: "0", autoAlpha: 1, ease: "none" }, "frame_3")
    .to(photo3, 3, { scale: 1.1, x: '-15', y: '-10', autoAlpha: 1, ease: "none" }, "frame_3+=0.8")
    .to(["#cta"], 0.5, { bottom: 30, autoAlpha: 1, ease: "power1.out", }, "frame_3")
    .to(copy2, 0.5, { y: '-20', opacity: 0, autoAlpha: 0, ease: "power1.out", }, "frame_3+=0.5")
    .to(copy3, 0, { left: 15, y: '-20', autoAlpha: 1, ease: "power1.out", }, "frame_3+=1")
    .to(copy3, 0.5, { left: 15, y: '0', autoAlpha: 1, ease: "power1.out", }, "frame_3+=1")
    .to(["#cta"], 0.2, { bottom: 20, autoAlpha: 1, ease: "power1.out", }, "frame_3+=1.2")
    .to(terms, { autoAlpha: 1 })
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
