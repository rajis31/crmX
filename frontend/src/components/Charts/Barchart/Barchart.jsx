import React from 'react'
import "./BarChart.css";
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

const Barchart = ({ xAxisDataKey,barDataKey, fill, data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%" className="barchart" >
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={barDataKey} fill={fill} />
            </BarChart>
        </ResponsiveContainer>
    )
};

export default Barchart
