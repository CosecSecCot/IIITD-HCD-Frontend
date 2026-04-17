"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Cobalt Tide palette in linear-ish sRGB — matches globals.css:
//   brand-accent2-130 #1A4A5E, brand-accent2 #245F78, lighter highlight
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // 2D simplex noise (Ashima Arts)
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                     + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                            dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    // correct for aspect so noise/cursor feel circular, not stretched
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 uv = vUv * aspect;
    vec2 mouse = uMouse * aspect;

    float dist = distance(uv, mouse);
    vec2 warp = (uv - mouse) * smoothstep(0.5, 0.0, dist) * 0.12;

    float n = snoise(uv * 2.2 + warp + uTime * 0.12);
    n += snoise(uv * 4.5 - uTime * 0.08) * 0.55;
    n += snoise(uv * 9.0 + uTime * 0.05) * 0.25;

    vec3 cobaltDeep  = vec3(0.08, 0.22, 0.31); // deeper than -130 for depth
    vec3 cobaltDark  = vec3(0.102, 0.290, 0.369); // #1A4A5E
    vec3 cobalt      = vec3(0.141, 0.372, 0.471); // #245F78
    vec3 cobaltLight = vec3(0.498, 0.710, 0.800); // airy cobalt highlight
    vec3 saltFoam    = vec3(0.933, 0.902, 0.792); // #EEE6CA

    float t = smoothstep(-1.0, 1.0, n);
    vec3 col = mix(cobaltDeep, cobaltDark, t);
    col = mix(col, cobalt, smoothstep(0.3, 0.7, t));
    col = mix(col, cobaltLight, smoothstep(0.75, 1.0, t) * 0.6);

    // cursor bloom: soft salt-foam lift where the cursor is
    float bloom = smoothstep(0.35, 0.0, dist);
    col = mix(col, mix(col, saltFoam, 0.45), bloom * 0.55);

    // grain
    float grain = fract(sin(dot(vUv * (uTime * 0.5 + 1.0), vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.025;

    // soft vignette
    float vig = smoothstep(1.15, 0.35, length((vUv - 0.5) * vec2(uResolution.x/uResolution.y, 1.0)) * 1.3);
    col *= mix(0.82, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
  const { size, viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state, delta) => {
    if (!materialRef.current) return;
    const u = materialRef.current.uniforms;
    u.uTime.value += delta;
    u.uResolution.value.set(size.width, size.height);
    // smooth cursor follow
    u.uMouse.value.lerp(mouseTarget.current, 0.08);
    // read pointer (NDC -1..1 → 0..1 UV)
    const p = state.pointer;
    mouseTarget.current.set((p.x + 1) * 0.5, (p.y + 1) * 0.5);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function HeroShader() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 1], fov: 50 }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
