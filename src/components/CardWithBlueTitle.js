import React from 'react';
import {Paper, Typography, Box, useTheme} from '@mui/material';

const FastestLapVisualizer = ({ text = 'TBD', children }) => {
    const theme = useTheme();
    const primaryGradient = theme.palette.primary.mainGradient;

    return (
        <Paper elevation={3} sx={{ borderRadius: '40px', height: '100%' }}>
            <Paper elevation={3} sx={{ borderRadius: '40px 40px 0px 0px', background: primaryGradient }}>
                <Typography variant="h5" align="center" sx={{ p: 3, color: 'white', fontWeight: 'bold' }}>
                    {text}
                </Typography>
            </Paper>

            <Box>{children}</Box>
        </Paper>
    );
};

export default FastestLapVisualizer;
