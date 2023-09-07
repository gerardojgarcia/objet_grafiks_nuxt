<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";

const canvasContainer = ref(null);
let scene, camera, renderer, cube;

onMounted(() => {
  // Initialize Three.js scene, camera, and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, -0.25, 2);

  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasContainer.value.appendChild(renderer.domElement);

  //Create a PointLight and turn on shadows for the lights
  const light = new THREE.PointLight(0xffffff, 15, 20);
  light.position.set(0, 1, 4);
  light.castShadow = true; // default false
  scene.add(light);

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 1920; // default
  light.shadow.mapSize.height = 1080; // default
  light.shadow.camera.near = 0; // default
  light.shadow.camera.far = 500; // default

  // Create a cube and add it to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial(
    { color: 0xddd72d },
    { metalness: 1.0 }
  );
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  cube.receiveShadow = false;

  scene.add(cube);

  const planeGeometry = new THREE.PlaneGeometry(20, 20, 30, 32);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffd8ff });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  plane.position.z = -1;
  scene.add(plane);

  //Create a helper for the shadow camera (optional)
  const helper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(helper);

  // Position the camera

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z -= 0.02;

    renderer.render(scene, camera);
  };

  animate();
});
</script>

<template>
  <div ref="canvasContainer" class="three-component"></div>
</template>

<style lang="css" scoped>
.three-component {
  width: 100vw;
  height: 75vh;
}
</style>
