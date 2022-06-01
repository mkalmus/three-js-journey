import './style.css'
import * as THREE from 'three'

const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    //dividing by width and height gives us a value between -0.5 and 0.5 instead of px
    cursor.x = event.clientX / sizes.width - 0.5
    // or can multiply by -1 here instead of doing it in the camera later
    cursor.y = event.clientY / sizes.height - 0.5
})


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
//(field of fiew, aspect ratio, near, far)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// in orthographic, objects are the same size regardless of distance
// parameters are how far the camera can see in each direction - left right top bottom
const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update Camera
    camera.position.x = cursor.x * -5
    camera.position.y = cursor.y * 5
    // camera.lookAt(new THREE.Vector3())
    camera.lookAt(mesh.position)

    // Update objects
    // mesh.rotation.y = elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()