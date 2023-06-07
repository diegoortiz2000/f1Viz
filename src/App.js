import React from 'react';
import FastestLapPage from "./components/FastestLapPage";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#141E30', mainGradient: 'linear-gradient(to right, #243B55, #141E30)',
        },
    },
});


function App() {
    return (<ThemeProvider theme={theme}>

        <FastestLapPage/>

    </ThemeProvider>);
}

export default App;
