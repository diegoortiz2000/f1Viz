import React from 'react';
import {Paper, Typography, Box, useTheme} from '@mui/material';

const CardWithBlueTitle = ({ text = 'Title', children, customBg }) => {
    const theme = useTheme();
    const primaryGradient = theme.palette.primary.mainGradient;

    return (
        <Paper elevation={3} sx={{
            borderRadius: '40px',
            height: '95%',
            bgcolor: customBg ? customBg : 'white',
        }}
        >
            <Paper elevation={3} sx={{ borderRadius: '40px 40px 0px 0px', background: primaryGradient }}>
                <Typography variant="h5" align="center" sx={{ p: 3, color: 'white', fontWeight: 'bold' }}>
                    {text}
                </Typography>
            </Paper>

            <Box sx={{maxHeight: '80vh',overflow: 'hidden'}}>{children}</Box>
        </Paper>
    );
};

export default CardWithBlueTitle;
