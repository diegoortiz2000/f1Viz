import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FastestLapPage from "./components/FastestLapPage";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import RbNavBar from "./components/RbNavBar";
import PredictionPage from "./components/PredictionsPage";
import HomePage from "./components/HomePage";

const theme = createTheme({
    palette: {
        primary: {
            main: '#141E30', mainGradient: 'linear-gradient(to right, #243B55, #141E30)',
        },
        background: {
            default: "#F8F8F8"
        }

    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box>
                    <RbNavBar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/predictions" element={<PredictionPage/>}/>
                        <Route path="/fastest-lap" element={<FastestLapPage/>}/>
                    </Routes>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
