import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({chartTitle, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{chartTitle}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
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
                    <XAxis dataKey={"name"} stroke="#5550BD" />
                    <Line dataKey={dataKey} type="monotone" stroke="#5550BD"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}