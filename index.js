/*jshint esversion: 6 */
/*jshint browser: true */
/*jshint devel: true */

const $ = (query) => document.querySelector(query);

const sphere = $('a-sphere');
const plane = $('a-plane');
/*
const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;

const animate = () => {
  degrees = shiftDegrees(degrees);
  const color = `hsl(${degrees}, 100%, 50%)`;
  const variation = Math.sin(Date.now() / 1000);
  const position = `0 ${1.5 + variation} -2`;
  const rotation = `-90 0 ${degrees}`;

  sphere.setAttribute('color', color);
  sphere.setAttribute('position', position);

  plane.setAttribute('color', color);
  plane.setAttribute('rotation', rotation);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
*/
AFRAME.registerComponent('my-animation', { 
 init: function () {
   var self = this;
   this.time = 0;
   this.animation = AFRAME.ANIME({
    targets: [{x: -Math.PI / 2, y: 0, z: 0}],
    x: -Math.PI / 2, y: 0, z: 2*Math.PI,
    autoplay: false,
    duration: 20000,
    easing: "linear",
    loop: true,
    round: false,
    update: function (animation) {
      var value = animation.animatables[0].target;
      self.el.object3D.rotation.set(value.x, value.y, value.z);
    }
   });
   this.animation.began = true;
  
 },
 tick: function (t, dt) {
   this.time += dt;
   this.animation.tick(this.time);
 }
});