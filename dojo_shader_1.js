var camera, scene, renderer;
var mesh;

init();
animate();

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    var geometry = new THREE.BoxGeometry(200, 200, 200);

    const cubeUniforms = {
        iResolution:  { value: new THREE.Vector3() }
    };

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

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}