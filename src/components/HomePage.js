import React from "react";
import {
    Box, Button, Card, CardMedia, Divider, Grid, Typography, useTheme
} from "@mui/material";
import {Canvas} from "@react-three/fiber";
import {Model} from "./F1car2";
import {OrbitControls} from "@react-three/drei";
import { Link } from 'react-router-dom';

const pages = [
    { name: 'Analyzer', path: '/fastest-lap' },
    { name: 'Predictions', path: '/predictions' },
];

const HomePage = () => (<Box sx={{bgcolor: 'black', height: '95vh', position: 'relative'}}>
    <Canvas
        gl={{alpha: true, antialias: true}}
        style={{height: '90vh'}}
        camera={{
            position: [0, 2, 10], fov: 50
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
        <Model speed={1}/>
        <OrbitControls autoRotate={true} autoRotateSpeed={0.5}/>
    </Canvas>
    <Box
        sx={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
        }}
    >

        <Grid container spacing={2}>
            <Grid item xs={2} /> {/* Empty element on the left */}
            {pages.map((page) => (
                <Grid item xs={4} key={page.path}>
                    <Button
                        component={Link}
                        to={page.path}
                        variant="contained"
                        color={page.color}
                        fullWidth
                        sx={{
                            backgroundColor: page.color === 'warning' ? '#FFD700' : 'red',
                            textTransform: 'none',
                            borderRadius: '50px',
                        }}
                    >
                        <Typography variant="h5" align="center" sx={{ p: 3, color: page.color === 'warning' ? 'black' : 'white', fontWeight: 'bold' }}>
                            {page.name}
                        </Typography>
                    </Button>
                </Grid>
            ))}
            <Grid item xs={2} /> {/* Empty element on the right */}
        </Grid>
        <Typography variant="body1" sx={{color: 'white', marginBottom: '16px', p:3, textTransform: 'uppercase'}}>
            Made in GDL by: Diego Ortiz, Hernesto Alvarez, Ariana Ayaviri, Oscar Miranda, Israel Delgado and Erick Calderon
        </Typography>
    </Box>
</Box>);

export default HomePage;