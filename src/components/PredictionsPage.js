import React, {useEffect, useState} from "react";
import {
    Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography, useMediaQuery, useTheme
} from "@mui/material";
import CustomSelect from "./CustomSelect";
import CardWithBlueTitle from "./CardWithBlueTitle";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const drivers = ["Adrian Sutil", "Alexander Albon", "Alexander Rossi", "Ambrosio", "Andre Lotterer", "Antonio Giovinazzi", "Brendon Hartley", "Bruno Senna", "Carlos Sainz", "Charles Leclerc", "Charles Pic", "Christian Klien", "Daniel Ricciardo", "Daniil Kvyat", "Esteban Gutierez", "Esteban Ocon", "Felipe Massa", "Felipe Nasr", "Fernando Alonso", "George Russell", "Giedo van der Garde", "Guanyu Zhou", "Heikki Kovalainen", "Jack Aitken", "Jaime Alguersuari", "Jarno Trulli", "Jeanis Vergne", "Jenson Button", "Jolyon Palmer", "Jules Bianchi", "Kamui Kobayashi", "Karun Chandhok", "Kevin Magnussen", "Kimi Raikkonen", "Lance Stroll", "Lando Norris", "Lewis Hamilton", "Logan Sargeant", "Lucas di Grassi", "Marcus Ericsson", "Mark Webber", "Max Chilton", "Max Verstappen", "Michael Schumacher", "Mick Schumacher", "Narain Karthikeyan", "Nicholas Latifi", "Nick Heidfeld", "Nico Hukenberg", "Nico Rosberg", "Nikita Mazepin", "Nyck de Vries", "Oscar Piastri", "Pascal Wehrlein", "Pastor Maldonado", "Paul di Resta", "Pedro de la Rosa", "Pierre Gasly", "Pietro Fittipaldi", "Rio Haryanto", "Robert Kubica", "Roberto Merhi", "Romain Grosjean", "Rubens Barrichello", "Sakon Yamamoto", "Sebastian Vettel", "Sebastien Buemi", "Sergey Sirotkin", "Sergio Perez", "Stoffel Vandoorne", "Timo Glock", "Valtteri Bottas", "Vitaly Petrov", "Vitantonio Liuzzi", "Will Stevens", "Yuki Tsunoda"];
const positions = Array.from({length: 20}, (_, index) => index + 1);
const circuits = ["Circuit of the Americas", "Miami International Autodrome", "Albert Park Grand Prix Circuit", "Red Bull Ring", "Baku City Circuit", "Bahrain International Circuit", "Circuit de Spa-Francorchamps", "Autodromo Jose Carlos Pace", "Silverstone Circuit", "Circuit Gilles Villeneuve", "Shanghai International Circuit", "Circuit Paul Ricard", "Hockenheimring", "Nürburgring", "Hungaroring", "Buddh International Circuit", "Autodromo Enzo e Dino Ferrari", "Autodromo Internazionale del Mugello", "Autodromo Nazionale di Monza", "Suzuka Circuit", "Korean International Circuit", "Sepang International Circuit", "Autodromo Hermanos Rodriguez", "Circuit de Monaco", "Circuit Park Zandvoort", "Autodromo Internacional do Algarve", "Losail International Circuit", "Sochi Autodrom", "Jeddah Corniche Circuit", "Marina Bay Street Circuit", "Circuit de Barcelona-Catalunya", "Valencia Street Circuit", "Istanbul Park", "Yas Marina Circuit"];
const PredicitonsPage = () => {
    const [selectedCircuit, setSelectedCircuit] = useState('');
    const [selectedDriver, setSelectedDriver] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        if (selectedCircuit && selectedDriver && selectedPosition) {
            const requestOptions = {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                    "GP_name": selectedCircuit, "quali_pos": selectedPosition, "driver": selectedDriver,
                })
            };

            fetch('https://cors-anywhere.herokuapp.com/http://140.84.185.98:8443/predict', requestOptions)
                .then(response => response.json())
                .then(data => setPrediction(data.prediction));
        }
    }, [selectedCircuit, selectedDriver, selectedPosition]);

    const getColor = () => {
        switch (prediction) {
            case 0: return 'gold';
            case 1: return 'silver';
            case 2: return '#5d4037';
            default: return 'black';
        }
    }

    const getPositionRange = () => {
        switch (prediction) {
            case 0: return 'win podium';
            case 1: return '4-10 place';
            case 2: return '10-20 place';
            default: return '';
        }
    }

    return (<Container sx={{p: 3}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <CustomSelect
                    label="Select GP"
                    labelId="circuit-selection"
                    value={selectedCircuit}
                    options={circuits}
                    onChange={(event) => setSelectedCircuit(event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CustomSelect
                    label="Select Driver"
                    labelId="driver-selection"
                    value={selectedDriver}
                    options={drivers}
                    onChange={(event) => setSelectedDriver(event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CustomSelect
                    label="Select Qualifying Position"
                    labelId="position-selection"
                    value={selectedPosition}
                    options={positions}
                    onChange={(event) => setSelectedPosition(event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardWithBlueTitle text="Fastest Lap Visualizer">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"
                         height="60vh" sx={{p:3}}>
                        <EmojiEventsOutlinedIcon style={{fontSize: 300, color: getColor()}}/>
                        <Typography variant="h5" align="center">
                            {prediction !== null ? `${selectedDriver} will get a ${getPositionRange()} in ${selectedCircuit}` : "Select parameters to make prediction"}
                        </Typography>
                    </Box>
                </CardWithBlueTitle>
            </Grid>
        </Grid>
    </Container>)
}

export default PredicitonsPage;