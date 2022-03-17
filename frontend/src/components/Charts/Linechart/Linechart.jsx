import React from 'react';
import "./Linechart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
}
    from 'recharts';

import { Typography } from '@mui/material';

const Linechart = ({ data, xAxisDataKey, lineKey, lineColor, title }) => {

    return (
        data?.length > 0 ? (
            <>
                <div className='line-chart__title'>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                </div>
                <ResponsiveContainer width={540} height={400} className="linechart">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={xAxisDataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone"
                            dataKey={lineKey}
                            stroke={lineColor}
                            strokeDasharray="5 5"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </>
        ) :
            (
                <>
                    <div className='line-chart__title'>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                    </div>
                    <ResponsiveContainer width={500} height={400} className="linechart">
                        <LineChart
                            width={500}
                            height={300}
                            data={{ day: 0, cum_sum: 0 }}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={xAxisDataKey} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone"
                                dataKey={lineKey}
                                stroke={lineColor}
                                strokeDasharray="5 5"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            )
    )
}

export default Linechart;
