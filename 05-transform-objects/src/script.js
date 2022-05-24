import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // //moves right
// // mesh.position.x = .1
// // //moves up
// // mesh.position.y = .1
// // //moves forward
// // mesh.position.z = 1
// scene.add(mesh)

// GROUP WITH 3 CUBES
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
group.add(cube2)
cube2.position.x = -1.5

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

group.add(cube3)
cube3.position.x = 1.5

group.position.y = 0.5
group.scale.y = 0.5
group.rotation.y = Math.PI / 4

// mesh.position.normalize()
// mesh.position.set(.1, 1, .1)

// Axes Helper
// input parameter changes the length (default is 1 unit)
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// Rotation
// can use rotation property or the quaternion property
// rotation is an euler so we can't use the vector3 properties as earlier
// one full rotation = 2*pi
// we can solve potential issues by letting it know what order to rotate
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = Math.PI / 2

// Group class allows us to put stuff together and position, rotate, and scale all of them together


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3
scene.add(camera)

//lookAt method allows us to rotate an object so its -z faces another object
//camera.lookAt(new THREE.Vector3(0, 0 , 0))
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)