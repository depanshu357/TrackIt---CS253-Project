import React from 'react';
import "./Dashboard.css";
import Progressbar from './Progress_bar';
import { PieChart, Pie } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { LineChart, Line } from 'recharts';
// const data1 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },

// ];


const Dashboard = () => {
    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },

    ];

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '140vh'
            }}
        >

            <div className="piechart">
                <h3>Average spending of people with income</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        startAngle={360}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                </PieChart>
            </div>
            <div className="bargraph">

                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </div>

            <div className="linegraph">

                <LineChart
                    width={500}
                    height={400}
                    data={data}
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
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </div>

            <div className="progressbar">
                <Progressbar bgcolor="violet" progress='10' height={10} />
            </div>

        </div>

    );
};

export default Dashboard;