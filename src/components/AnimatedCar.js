import React, { useState} from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { Model } from "./F1car2";

function calculateTime(positions, speeds) {
    const totalDistance = positions.reduce((acc, pos, i, arr) => i < arr.length - 1 ? acc + Math.sqrt(pos.reduce((a, coord, j) => a + Math.pow((coord - arr[i + 1][j]) / 10, 2), 0)) : acc, 0);
    const averageSpeed = speeds.reduce((sum, speed) => sum + speed, 0) / speeds.length;

    return totalDistance / averageSpeed;
}

const AnimatedCar = ({points, speeds}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carPosition, setCarPosition] = useState(new THREE.Vector3());
    const [carRotation, setCarRotation] = useState(new THREE.Euler());

    // The speeds are in km/h, we need to convert them to m/s
    speeds = speeds.map(speed => speed * (1000 / 3600));
    const carScale = 1 / 20;
    const heightFromGround = 0.005;

    // We calculate the time it takes to do the lap based on the points and speeds
    const timeToComplete = calculateTime(points, speeds);

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        const totalTime = elapsedTime % timeToComplete;
        const progress = totalTime / timeToComplete;

        if (progress * points.length > currentIndex + 1) {
            setCurrentIndex(index => index + 1);
        }

        if (currentIndex >= points.length - 1) {
            setCurrentIndex(0);
            clock.start();
        } else {
            // Swap y and z in points
            const targetPosition = new THREE.Vector3(points[currentIndex][0], points[currentIndex][2], points[currentIndex][1]);
            const newCarPosition = carPosition.clone().lerp(targetPosition, 0.1);
            // Add height from ground
            newCarPosition.y += heightFromGround;
            // Set the new position of the car
            setCarPosition(newCarPosition);
            // Change the rotation of the car to follow the direction of movement
            const nextPoint = new THREE.Vector3(points[currentIndex + 1][0], points[currentIndex + 1][2], points[currentIndex + 1][1]);
            const direction = new THREE.Vector3().subVectors(nextPoint, newCarPosition);
            const angle = Math.atan2(direction.z, direction.x);
            //set the rotation
            setCarRotation(new THREE.Euler(0, -angle+ + Math.PI / 2, 0));
        }
    });

    return (
        <Model position={carPosition} scale={carScale} rotation={carRotation} />
    );
};

export default AnimatedCar;
