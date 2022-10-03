const dojo1_fragmentShader = `

out vec4 fragColor;
varying vec3 v_normal;

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {

    vec3 light = normalize(vec3(1,1,1));
    float diffuse = dot(-light, v_normal);

    fragColor.xyz = vec3(1,0,1) * diffuse;
    fragColor.a = 1.;

}

void main() {
    mainImage(fragColor, gl_FragCoord.xy);
}
`;