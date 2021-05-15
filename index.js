/*jshint esversion: 6 */
/*jshint browser: true */
/*jshint devel: true */

const $ = (query) => document.querySelector(query);

const sphere = $('a-sphere');
const plane = $('a-plane');
const camera = $('a-camera');
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

AFRAME.registerComponent('vrcamera', { 

 init: function () {
   console.log(this);

 },

 tick: function (t, dt) {
   //console.log(dt);
   //camera.setAttribute('position', '0, 10, 0')
   this.el.attributes.position.value = '0 9 0';
 }
});