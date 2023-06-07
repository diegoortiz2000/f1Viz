// Page that shows the fastest lap of the Red Bull Racing team in all the current gps of the season if the gp hasn't been run we use the fastest lap of the last year
//
import React, {useEffect, useState} from "react";
import FastestLapsSim from "./FastestLapsSim";
import {Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import CardWithBlueTitle from "./CardWithBlueTitle";
import LapTable from "./LapTable";
import DualSpeedGraph from "./DualSpeedGraph";

const circuits = ['Bahrain Grand Prix', 'Saudi Arabian Grand Prix', 'Australian Grand Prix', 'Azerbaijan Grand Prix', 'Miami Grand Prix', 'Monaco Grand Prix', 'Spanish Grand Prix', 'Canadian Grand Prix', 'Austrian Grand Prix', 'British Grand Prix', 'Hungarian Grand Prix', 'Belgian Grand Prix', 'Dutch Grand Prix', 'Italian Grand Prix', 'Singapore Grand Prix', 'Japanese Grand Prix', 'Qatar Grand Prix', 'United States Grand Prix', 'Mexico City Grand Prix', 'São Paulo Grand Prix', 'Las Vegas Grand Prix', 'Abu Dhabi Grand Prix']
export default function FastestLapPage() {
    const [eventData, setEventData] = useState([]);
    const [fastestLapData, setFastestLapData] = useState([]);
    const [eventNames, setEventNames] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');
    const [lapTimes, setLapTimes] = useState([]);
    const [lapSpeeds, setLapSpeeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataPromises = circuits.map(async (circuit) => {
                    const response = await fetch(`events/${circuit}.json`);
                    return response.json();
                });

                const grandPrixData = await Promise.all(dataPromises);
                setEventData(grandPrixData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error if necessary
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setEventNames(eventData.map(gp => gp.event));
    }, [eventData]);

    useEffect(() => {
        const selectedEventDetails = eventData.find(gp => gp.event === selectedEvent);
        if (selectedEventDetails) {
            setFastestLapData(selectedEventDetails.fastestLapData);
            setLapTimes(selectedEventDetails.lapTimes);
            setLapSpeeds(selectedEventDetails.lapsSpeed)
        }
    }, [selectedEvent]);


    return (
        <Box sx={{ p: 4, height: '95vh' }}>
            <Grid spacing={4} container sx={{ height: '100%' }}>
                <Grid item xs={12} sm={6}>
                    <CardWithBlueTitle text="Fastest Lap Visualizer" customBg={'black'}>
                        {fastestLapData && <FastestLapsSim data={fastestLapData} />}
                    </CardWithBlueTitle>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container direction="column" spacing={4}>
                        <Grid item>
                            <FormControl fullWidth sx={{ height: '100%' }}>
                                <InputLabel id={'gp-selection'}>Select GP</InputLabel>
                                <Select
                                    value={selectedEvent}
                                    label="Select GP"
                                    labelId="gp-selection"
                                    sx={{
                                        borderRadius: '40px',
                                        color: 'primary.main',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'primary.main',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: 'primary.main',
                                        },
                                    }}
                                    onChange={(event) => setSelectedEvent(event.target.value)}
                                >
                                    {eventNames.map((circuit, index) => (
                                        <MenuItem key={index} value={circuit}>
                                            {circuit}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <CardWithBlueTitle text="Fastest Lap Comparison">
                                {lapTimes && <LapTable data={lapTimes}></LapTable>}
                                {lapSpeeds && <DualSpeedGraph data={lapSpeeds} />}
                            </CardWithBlueTitle>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );


}
