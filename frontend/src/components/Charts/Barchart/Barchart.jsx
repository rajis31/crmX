import React from 'react'
import "./Barchart.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { Typography } from '@mui/material';

const Barchart = ({ xAxisDataKey, barDataKey, fill, data, title, dataMax }) => {

    return (
        <>
            {data?.length > 0 ?
                <>
                    <div className='bar-chart__title'>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                    </div>
                    <ResponsiveContainer width={500} height={300} className="barchart" >
                        <BarChart
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
                            <YAxis  type="number" domain={[0, dataMax]} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey={barDataKey} fill={fill} />
                        </BarChart>
                    </ResponsiveContainer>
                </> :
                <>
                    <div className='bar-chart__title'>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                    </div>
                    <ResponsiveContainer width={500} height={300} className="barchart" >
                        <BarChart
                            width={500}
                            height={300}
                            data={[{ name: "No Data", "No Data": 0 }]}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="No Data" fill={fill} />
                        </BarChart>
                    </ResponsiveContainer>
                </>

            }
        </>
    )
};

export default Barchart
