let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const cube_edge = 3
    const geometry = new THREE.BoxGeometry(cube_edge, cube_edge, cube_edge);

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.007;
    cube.rotation.y += 0.006;
    cube.rotation.z += 0.005;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
