import React from 'react';
import {
    VictoryChart,
    VictoryLine,
    VictoryAxis,
    VictoryLabel,
    VictoryTooltip,
    VictoryTheme,
    VictoryZoomContainer,
    VictoryLegend
} from 'victory';
import {Box} from '@mui/material';

const DualSpeedGraph = ({data}) => {
    if (!Array.isArray(data) || data.length < 2) {
        return null;
    }

    if (!data[0].hasOwnProperty('data') || !data[1].hasOwnProperty('data')) {
        return null;
    }

    const perezData = data[0].data;
    const verstappenData = data[1].data;

    return (<Box sx={{height: '700px', p: 3}}>
            <VictoryChart theme={VictoryTheme.material} containerComponent={<VictoryZoomContainer/>}>
                <VictoryLegend x={90} y={10}

                               orientation="horizontal"
                               gutter={20}
                               style={{border: {stroke: "black"}}}
                               colorScale={["blue", "navy"]}
                               data={[{name: "Perez"}, {name: "Verstappen"}]}
                />
                <VictoryLine
                    data={perezData}
                    style={{data: {stroke: "blue"}}}
                    labels={({datum}) => `Perez: ${datum.y}`}
                    labelComponent={<VictoryTooltip/>}
                />

                <VictoryLine
                    data={verstappenData}
                    style={{data: {stroke: "navy"}}}
                    dependentAxis
                    labels={({datum}) => `Verstappen: ${datum.y}`}
                    labelComponent={<VictoryTooltip/>}
                />

                <VictoryAxis dependentAxis
                />

                <VictoryAxis
                    label="Time"
                    style={{
                        axisLabel: {padding: 30},
                    }}
                />
            </VictoryChart>
        </Box>);
};

export default DualSpeedGraph;
