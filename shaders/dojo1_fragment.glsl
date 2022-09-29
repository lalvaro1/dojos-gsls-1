const dojo1_fragmentShader = `

out vec4 fragColor;
varying vec3 v_normal;

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    fragColor = vec4(1, 0, 1, 1);
}

void main() {
    mainImage(fragColor, gl_FragCoord.xy);
}
`;