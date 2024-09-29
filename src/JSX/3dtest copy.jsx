import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, ContactShadows } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { a as web } from '@react-spring/web';
import { useTranslation } from 'react-i18next'; // Importation pour la traduction
import '../i18n'; // Assurez-vous que ce fichier est configuré correctement
import '../section/canvas.css';
import profileImage from '../assets/profile.jpg'; // Importez l'image

// Composant pour charger et afficher le modèle 3D
function Model({ open, hinge, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/mac-draco.glb'); // Charge le modèle GLTF
  const [hovered, setHovered] = useState(false);
  
  // Charge l'image comme texture
  const texture = new THREE.TextureLoader().load(profileImage);
  texture.flipY = false; // Désactive l'inversion verticale

  // Animation de mise à jour de la position du modèle
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -4.3, 0.1);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation(); // Empêche la propagation des événements de souris
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          {/* Les différentes parties du modèle */}
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh material={new THREE.MeshBasicMaterial({ map: texture })} geometry={nodes['Cube008_2'].geometry} /> {/* Texture avec flipY désactivé */}
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


// Composant principal de l'application
export default function App() {
  const { t } = useTranslation(); // Utilisation de useTranslation pour accéder à la fonction de traduction
  const [open, setOpen] = useState(0); // État pour gérer l'ouverture
  const props = useSpring({ open: open }); // Animation pour l'ouverture

  // Fonction pour gérer le défilement de la souris
  const handleScroll = (event) => {
    const newOpenValue = THREE.MathUtils.clamp(open + event.deltaY * 0.01, 0, 1);
    setOpen(newOpenValue);
  };

  // Ajoute ou enlève le gestionnaire d'événements pour le défilement de la souris
  useEffect(() => {
    if (open < 1) {
      window.addEventListener('wheel', handleScroll);
    } else {
      window.removeEventListener('wheel', handleScroll);
    }
    return () => window.removeEventListener('wheel', handleScroll);
  }, [open]);

  // Modifie le style de débordement du corps du document en fonction de l'ouverture
  useEffect(() => {
    document.body.style.overflow = open >= 1 ? 'auto' : 'hidden';
  }, [open]);

  return (
    <div className="container">
      <div className="canvas-wrapper">
        <web.h1 style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`),
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '4rem',
          zIndex: 10 // Assure que le texte est au-dessus du canevas
        }}>
          {t('accueil_titre')}
        </web.h1>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, -21], fov: 35 }}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Source de lumière */}
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
            <Environment preset="city" /> {/* Environnement de fond */}
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            opacity={0.4}
            scale={20}
            blur={1.75}
            far={4.5}
          />
        </Canvas>
      </div>
    </div>
  );
}
