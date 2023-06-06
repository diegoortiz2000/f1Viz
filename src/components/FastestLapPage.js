// Page that shows the fastest lap of the Red Bull Racing team in all the current gps of the season if the gp hasn't been run we use the fastest lap of the last year
//
import React, {useState, useEffect} from "react";
import FastestLapsSim from "./FastestLapsSim";
import {Box, Typography, Grid, Select, MenuItem, Card, useTheme} from "@mui/material";
import CardWithBlueTitle from "./CardWithBlueTitle";


export default function FastestLapPage() {
    const [data, setData] = useState([]); // Create state variable 'data' and set it to an empty array


    useEffect(() => {
        fetch('FastestLaps/62023.json')
            .then(response => response.json())
            .then(data => {
                // Grab the values from the JSON response and scale them
                setData(data)
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, []);

    return (<Box sx={{p: 4, height: '100vh'}}>
        <Grid spacing={4} container sx={{height: '100%'}}>
            <Grid item xs={6}>
                <CardWithBlueTitle text="Fastest Lap Visualizer">
                    <Box sx={{pb: 2}}>
                        {data && <FastestLapsSim data={data}/>}
                    </Box>
                </CardWithBlueTitle>
            </Grid>
            <Grid item xs={6} container direction="column" spacing={4} >
                <Grid item>
                    <Select>
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                    </Select>
                </Grid>
                <Grid item sx={{flexGrow: 1}}>
                    <CardWithBlueTitle text="Fastest Lap Comparison">
                        <Box sx={{pb: 2}}>
                            <Typography variant="h5" align="center" sx={{p: 3, color: 'white', fontWeight: 'bold'}}>
                                TBD
                            </Typography>
                        </Box>
                    </CardWithBlueTitle>
                </Grid>
            </Grid>
        </Grid>
    </Box>);

}
