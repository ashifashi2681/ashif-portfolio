import React, { Suspense, act, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Environment, useAnimations } from "@react-three/drei";

const Model = ({name}) => {

	const gltf = useLoader(GLTFLoader, `./${name}.glb`);
	const { actions, names } = useAnimations(gltf.animations, gltf.scene);
	useEffect(() => {
		actions[names[0]].reset().fadeIn(0.5).play();
	}, []);

	return (
		<group position={[0, -0.9, 0]} >
			<primitive object={gltf.scene} />
		</group>
	);
};

function AvatarOne({name}) {
    
	return (
		<Canvas
			shadows
			camera={{
				position: [1, 1.8, 5],
				fov: 20,
			}}
			className="canvas">
			<Suspense fallback={null}>
				<Model name={name} />
				<Environment preset="sunset" />
			</Suspense>
			<OrbitControls
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
				enableZoom={false}
			/>
		</Canvas>
	);
}

export default AvatarOne;
