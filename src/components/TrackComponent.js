import React from 'react';
import { BufferGeometry, BufferAttribute, DoubleSide } from 'three';
import {Line} from '@react-three/drei'

const TrackComponent = ({ points }) => {
    const width = 0.25;
    const height = 0.05;
    const halfWidth = width / 2;

    let leftEdges = [];
    let rightEdges = [];
    let leftDown = [];
    let rightDown = [];

    for (let i = 0; i < points.length - 1; i++) {
        const point1 = points[i];
        const point2 = points[i + 1];

        const dx = point2[0] - point1[0];
        const dy = point2[1] - point1[1];
        const dz = point2[2] - point1[2];

        const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

        const nx = -dy / length;
        const ny = dx / length;

        const leftEdge = [point1[0] + halfWidth * nx, point1[2], point1[1] + halfWidth * ny];
        const rightEdge = [point1[0] - halfWidth * nx, point1[2], point1[1] - halfWidth * ny];
        const leftDownVertex = [point1[0] + halfWidth * nx, point1[2] - height, point1[1] + halfWidth * ny];
        const rightDownVertex = [point1[0] - halfWidth * nx, point1[2] - height, point1[1] - halfWidth * ny];

        leftEdges.push(leftEdge);
        rightEdges.push(rightEdge);
        leftDown.push(leftDownVertex);
        rightDown.push(rightDownVertex);
    }

    const leftEdgesLeftDownGeometry = createCombinedGeometry(leftEdges, leftDown);
    const rightEdgesRightDownGeometry = createCombinedGeometry(rightEdges, rightDown);
    const leftRightGeometry = createCombinedGeometry(leftEdges, rightEdges);
    const leftDownRightDownGeometry = createCombinedGeometry(leftDown, rightDown);

    // Create faces for left edges to left down
    const leftEdgesLeftDownIndices = createIndices(leftEdges.length, leftDown.length);
    leftEdgesLeftDownGeometry.setIndex(leftEdgesLeftDownIndices);

    // Create faces for right edges to right down
    const rightEdgesRightDownIndices = createIndices(rightEdges.length, rightDown.length);
    rightEdgesRightDownGeometry.setIndex(rightEdgesRightDownIndices);

    // Create faces for left edges to right edges
    const leftRightIndices = createIndices(leftEdges.length, rightEdges.length);
    leftRightGeometry.setIndex(leftRightIndices);

    // Create faces for left down to right down
    const leftDownRightDownIndices = createIndices(leftDown.length, rightDown.length);
    leftDownRightDownGeometry.setIndex(leftDownRightDownIndices);

    return (
        <>
            <mesh geometry={leftEdgesLeftDownGeometry}>
                <meshStandardMaterial color="red" side={DoubleSide} />
            </mesh>
            <mesh geometry={rightEdgesRightDownGeometry}>
                <meshStandardMaterial color="red" side={DoubleSide} />
            </mesh>
            <mesh geometry={leftRightGeometry}>
                <meshStandardMaterial color="grey" side={DoubleSide} />
            </mesh>
            <mesh geometry={leftDownRightDownGeometry}>
                <meshStandardMaterial color="red" side={DoubleSide} />
            </mesh>
            <Line points={leftEdges} color={'white'} lineWidth={2}  />
            <Line points={rightEdges} color={'white'} lineWidth={2}  />
        </>
    );
};

// Utility function to create combined buffer geometries
const createCombinedGeometry = (vertices1, vertices2) => {
    const totalVertices = vertices1.length + vertices2.length;
    const positions = new Float32Array(totalVertices * 3);

    for (let i = 0; i < vertices1.length; i++) {
        vertices1[i].forEach((value, index) => {
            positions[i * 3 + index] = value;
        });
    }

    for (let i = 0; i < vertices2.length; i++) {
        vertices2[i].forEach((value, index) => {
            positions[(i + vertices1.length) * 3 + index] = value;
        });
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    return geometry;
};

// Utility function to create indices for connecting vertices
const createIndices = (vertices1Count) => {
    const indices = [];

    for (let i = 0; i < vertices1Count - 1; i++) {
        indices.push(i, i + 1, i + vertices1Count);
        indices.push(i + 1, i + vertices1Count + 1, i + vertices1Count);
    }

    indices.push(vertices1Count - 1, 0, vertices1Count);
    indices.push(0, 1, vertices1Count);

    return indices;
};

export default TrackComponent;
