import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { VRButton } from "https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/webxr/VRButton.min.js";
import { OBJLoader } from 'https://cdn.rawgit.com/mrdoob/three.js/r128/examples/jsm/loaders/OBJLoader.js'; // Import OBJLoader

let container = document.querySelector('#container');

const scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
  45, // Field of View Angle
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Clipping for things closer than this amount
  1000 // Clipping for things farther than this amount
);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.xr.enabled = true;
container.appendChild(VRButton.createButton(renderer));

let canvas = renderer.domElement;
container.appendChild(canvas);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setY(1.7);

const loader = new OBJLoader(); // Create an OBJLoader instance

loader.load('sad creature.obj', (obj) => {
  // Callback function when the OBJ file is loaded
  const geometry = obj.children[0].geometry; // Assuming there's only one child
  const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
});

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function AddStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(AddStar);

let clock = new THREE.Clock();

function update() {
  let timeDelta = clock.getDelta();

  // You can apply rotations and updates here if needed

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(update);
