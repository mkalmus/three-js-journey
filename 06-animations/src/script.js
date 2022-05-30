import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time (use let because we change it)
let time = Date.now()

// Clock -- three.js alternative to framerate problem
const clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animation -- is called on each frame
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    // Time so we can animate at same speed
    // const currentTime = Date.now()
    // high fps = smaller deltatime as we are going faster
    // const deltaTime = currentTime - time
    // time = currentTime
    // Update object -- 1 rev/s
    // mesh.rotation.z = elapsedTime * (Math.PI * 2)
    // mesh.rotation.x = elapsedTime * (Math.PI * 2)

    // Use sin to make object go up and down
    // With cos we get a circle
    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)

    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
