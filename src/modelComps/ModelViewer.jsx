import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Scene";
import "../style/ModelViewer.css";

const ModelViewer = () => {
  return (
    <div className="c-wrapper">
      <Suspense
        fallback={<h2 id="loading-mess"> ¯\_༼ ಥ ‿ ಥ ༽_/¯ Loading...</h2>}
      >
        <Canvas camera={{ position: [10, 4, 0] }}>
          //Ambient light
          {/* <ambientLight intensity={1} color="white" /> */}
          //portal light
          <pointLight
            position={[-3.578, 2.374, 1]}
            color="green"
            intensity={50}
          />
          //Gauntlet light
          <pointLight
            position={[3.631, 3.54, -2.213]}
            color="white"
            intensity={20}
          />
          //Loki Helmet light
          <pointLight
            position={[3.46, 3.824, 3.224]}
            color="white"
            intensity={20}
          />
          //Thor Hammer light
          <pointLight
            position={[-3.427, 4.093, 3.744]}
            color="white"
            intensity={5}
          />
          //Couch light
          <pointLight
            position={[0, 5.314, 5.805]}
            color="white"
            intensity={20}
          />
          //workbench light
          <pointLight
            position={[-3.119, 4.921, -3.323]}
            color="white"
            intensity={5}
          />
          //Outside light
          <pointLight
            position={[-8.541, 2.822, -0.416]}
            color="white"
            intensity={50}
          />
          <pointLight
            position={[2.5, 1.491, -9.626]}
            color="white"
            intensity={50}
          />
          <Model position={[0, 0, 1]} />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ModelViewer;
