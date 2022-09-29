const dojo1_vertexShader = `

varying vec3 v_normal;

void main(void) {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_normal = normal;
}
`;