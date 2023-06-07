// Table component for displaying lap times
import React from "react";
import {
    Box, Card, CardMedia, Divider, Typography, useTheme
} from "@mui/material";

function LapTimeTableRow({time, driver, imageSource}) {
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;
    return <Box
        sx={{p: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <CardMedia component={'img'} image={imageSource} alt={'Driver image'} sx={{ width: 151 }}></CardMedia>
        <Typography variant="h5" sx={{p:3,fontWeight: 'bold', color:primaryColor }}>
            {driver}
        </Typography>
        <Typography variant="h5" sx={{p:3,fontWeight: 'bold'}}>
            {time ?? 'N/A'}
        </Typography>
    </Box>;
}

const LapTable = ({data}) => {
    return (<Box sx={{p: 3,}}>
            <Card>
                <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                    <LapTimeTableRow time={data.PER} driver="Perez" imageSource={'images/PER.png'}/>
                    <Divider/>
                    <LapTimeTableRow time={data.VER} driver="Verstappen" imageSource={'images/VER.png'}/>
                </Box>
            </Card>
        </Box>

    );
};

export default LapTable;