import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { a as web } from '@react-spring/web';
import { useTranslation } from 'react-i18next';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { easeCubicOut } from 'd3-ease';
import '../i18n';
import '../section/canvas.css';
import profileImage from '../assets/test.png';

function Model({ open, hinge, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/mac-draco.glb');
  const [hovered, setHovered] = useState(false);

  const texture = new THREE.TextureLoader().load(profileImage);
  texture.flipY = false;
  texture.minFilter = THREE.LinearFilter;
  texture.anisotropy = 16;

  useFrame(() => {
    if (group.current) {
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -4.3, 0.1);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh material={new THREE.MeshBasicMaterial({ map: texture })} geometry={nodes['Cube008_2'].geometry} />
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

export default function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(0);
  const props = useSpring({ open: open });

  const handleScroll = (event) => {
    const delta = event.deltaY * 0.01;
    const newOpenValue = THREE.MathUtils.clamp(open + delta, 0, 1);
    const easedValue = easeCubicOut(newOpenValue);
    setOpen(easedValue);
  };

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevent default scrolling
    const touch = event.touches[0];
    const canvas = document.querySelector('.canvas-wrapper'); // Get the canvas wrapper
    const rect = canvas.getBoundingClientRect(); // Get the bounding rectangle of the canvas
  
    const delta = touch.clientY - (rect.top + window.scrollY);
    const newOpenValue = THREE.MathUtils.clamp(open + delta * 0.05, 0, 1); // Increased sensitivity
    const easedValue = easeCubicOut(newOpenValue);
    setOpen(easedValue);
  };
  

  useEffect(() => {
    if (open < 1) {
      window.addEventListener('wheel', handleScroll);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    }
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open >= 1 ? 'auto' : 'hidden';
  }, [open]);

  // Adjust canvas size for mobile
  const adjustCanvasSize = () => {
    const canvasWrapper = document.querySelector('.canvas-wrapper');
    if (window.innerWidth <= 768) { // For mobile devices
      canvasWrapper.style.height = '45vh'; // Full viewport height
      canvasWrapper.style.width = '80vw'; // Full viewport width
    } else {
      canvasWrapper.style.height = '100%'; // Default height for larger screens
      canvasWrapper.style.width = '80%'; // Default width for larger screens
    }
  };

  useEffect(() => {
    adjustCanvasSize(); // Initial adjustment
    window.addEventListener('resize', adjustCanvasSize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', adjustCanvasSize); // Cleanup listener
    };
  }, []);

  return (
    <div className="container">
      <div className="canvas-wrapper">
        <web.h1 
        className="title"
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to((o) => `translate3d(-50%, ${o * 50 - 100}px, 0)`),
        }}>
          {t('accueil_titre')}
        </web.h1>
        <Canvas
          dpr={[1, 2]}
          antialias
          camera={{ position: [0, 0, -21], fov: 35 }}
          style={{ height: '100%', width: '100%' }}
        >
          <three.pointLight
            position={[10, 10, 10]}
            intensity={1.5}
            color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])}
          />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]}>
              <Model
                open={props.open.to([0, 1], [0, 1])}
                hinge={props.open.to([0, 1], [1.575, -0.1])}
              />
            </group>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
