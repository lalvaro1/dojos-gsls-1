let camera, scene, renderer;
let mesh;

const cubeUniforms = {
    iTime: { value: 0 },
};

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    const geometry = new THREE.BoxGeometry(200, 200, 200);

    const cubeMaterial = new THREE.ShaderMaterial({
        fragmentShader : dojo1_fragmentShader,
        vertexShader : dojo1_vertexShader,        
        uniforms : cubeUniforms,
        glslVersion: THREE.GLSL3   
    });

    mesh = new THREE.Mesh(geometry, cubeMaterial);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(millis) {

    let time = millis * 0.001;

    cubeUniforms.iTime.value = time;

    requestAnimationFrame(animate);

    mesh.rotation.x = 0.2 * time;
    mesh.rotation.y = 0.4 * time;

    renderer.render(scene, camera);
}

init();
animate();
