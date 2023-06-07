// Table component for displaying lap times
import React from "react";
import {Box, Card, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import * as PropTypes from "prop-types";

function LapTimeTableRow({time, driver}) {
    return <Box
        sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h5" sx={{p: 2}}>
            {driver}
        </Typography>
        <Typography variant="h5" sx={{p: 2}}>
            {time}
        </Typography>
    </Box>;
}

LapTimeTableRow.propTypes = {per: PropTypes.any};
const LapTable = ({data}) => {
    return (<Paper elevation={4}>
        <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>

            <LapTimeTableRow time={data.PER} driver="Perez"/>
            <LapTimeTableRow time={data.PER} driver="Perez"/>        </Box>
    </Paper>);
};

export default LapTable;