import React, {useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import TrackComponent from "./TrackComponent";
import {OrbitControls} from "@react-three/drei";
import AnimatedCar from "./AnimatedCar";

const FastestLapsSim = ({data}) => {
    const [points, setPoints] = useState([]);
    const [speeds, setSpeeds] = useState(0);
    const [modelCenter, setModelCenter] = useState([0, 0, 0]);
    const trackScale = 1 / 1000

    useEffect(() => {
        const scaledPoints = data.map(({ X, Y, Z }) => [X * trackScale, Y * trackScale, Z * trackScale]);
        const scaledSpeeds = data.map(({ Speed }) => Speed * trackScale);
        setPoints(scaledPoints);
        setSpeeds(scaledSpeeds);
        setModelCenter(calculateCenter(scaledPoints));
    }, [data, trackScale]);

    return (<Canvas
        gl={{alpha: true, antialias: true}}
        style={{height: '1000px'}}
        camera={{
            position: [modelCenter[1], 15, modelCenter[0]], fov: 50
        }}
    >
        {/* Ambient light */}
        <ambientLight intensity={0.3}/>
        {/* Key light */}
        <directionalLight position={[0, 10, 5]} intensity={1.5}/>
        {/* Fill light */}
        <directionalLight position={[10, 10, -10]} intensity={0.75}/>
        {/* Back light */}
        <directionalLight position={[-10, -10, -10]} intensity={2.0}/>
        <AnimatedCar points={points} speeds={speeds}></AnimatedCar>
        {points.length > 0 && <TrackComponent points={points}/>}
        <OrbitControls target={modelCenter} autoRotate={true} autoRotateSpeed={-0.15}/>
    </Canvas>);
}

const calculateCenter = (points) => {
    if (points.length === 0) {
        return [0, 0, 0];
    }

    const totalPoints = points.length;
    const sumPosition = points.reduce((sum, point) => sum.map((val, i) => val + point[i]), [0, 0, 0]);

    const centerX = sumPosition[0] / totalPoints;
    const centerY = sumPosition[2] / totalPoints; // Use point[2] (z value) for centerY
    const centerZ = sumPosition[1] / totalPoints; // Use point[1] (y value) for centerZ

    return [centerX, centerY, centerZ];
};

export default FastestLapsSim;
