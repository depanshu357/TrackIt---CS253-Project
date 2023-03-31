import React from 'react';
import "./Dashboard.css";
import Progressbar from './Progress_bar';
import { PieChart, Pie } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { LineChart, Line } from 'recharts';
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useDuesContext } from "../hooks/useDuesContext";

// components

let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let data_to_show = [];
let flag = 0;

const Dashboard = () => {
    var isPageBig = true;
    var isPageSmall;
    if (window.innerWidth <= 1100) {
        isPageSmall = true;
        isPageBig = false;
    }
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    const { expense, dispatch } = useExpenseContext();
    const [checked, setChecked] = useState(false);
    const { user } = useAuthContext();



    useEffect(() => {
        const fetchExpense = async () => {
            const response = await fetch("/api/expense", {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_EXPENSES", payload: json });
            }
        };

        if (user) {
            fetchExpense();
        }
    }, [dispatch, user]);

    function getDaysAgoData(daysAgo) {
        // Get current date
        let t = new Date();
        // Create UTC date for daysAgo
        let d = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate() - daysAgo));
        // Filter and sort data
        var month = '' + (d.getMonth() + 1);
        var date1 = '' + d.getDate();
        var year = '' + d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (date1.length < 2) {
            date1 = '0' + date1;
        }

        const date2 = year + "-" + month + "-" + date1;
        return date2;
    }

    let Food = 0;
    let Health = 0;
    let Shopping = 0;
    let Others = 0;
    var date = new Date(); var current_month = date.getMonth(); var todays_date = date.getDate(); var current_year = date.getFullYear();
    if (current_month.length < 2) {
        current_month = '0' + current_month;
    }
    var total_data = [];
    var last_fifteen_days_name = [];
    for (let i = 0; i < 15; i++) {
        last_fifteen_days_name.push(getDaysAgoData(i));
    }
    var last_fifteen_days_value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var last_fifteen_days_data = [];
    var piechart_data = [];
    var bar_graph_progress = 0;
    var total_budget = user.budget ? user.budget : 15000;
    for (let i = 1; i <= 12; i++) {
        let temp = 0;
        for (let j = 0; expense !== null && j < expense.length; j++) {
            if (expense[j].Date[5] + expense[j].Date[6] == current_month) {
                bar_graph_progress += expense[j].MoneySpent;
            }
            if (expense[j].Date[5] + expense[j].Date[6] == i) {
                temp += expense[j].MoneySpent;


                if (todays_date >= 16) {
                    if (expense[j].Date.substring(0, 4) == current_year && expense[j].Date[5] + expense[j].Date[6] == current_month + 1) {
                        if (Number(todays_date) - Number(expense[j].Date.substring(8, 10)) <= 15 && Number(todays_date) - Number(expense[j].Date.substring(8, 10)) > 0) {
                            // last_fifteen_days_name[15 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] = expense[j].Date.substring(0, 10);
                            last_fifteen_days_value[15 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] += expense[j].MoneySpent;
                        }
                    }
                }
                else {
                    if (expense[j].Date.substring(0, 4) == current_year && expense[j].Date[5] + expense[j].Date[6] == current_month + 1) {
                        if (Number(todays_date) - Number(expense[j].Date.substring(8, 10)) <= 15 && Number(todays_date) - Number(expense[j].Date.substring(8, 10)) > 0) {
                            // last_fifteen_days_name[15 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] = expense[j].Date.substring(0, 10);
                            last_fifteen_days_value[15 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] += expense[j].MoneySpent;
                        }
                    }
                    else if (expense[j].Date.substring(0, 4) == current_year && expense[j].Date[5] + expense[j].Date[6] == current_month) {
                        if (current_month == 2 || current_month == 4 || current_month == 6 || current_month == 7 || current_month == 9 || current_month == 11) {
                            if (current_month == 2) {
                                if (Number(expense[j].Date.substring(8, 10)) > 28 - (15 - todays_date + 1)) {
                                    // last_fifteen_days_name[28 - Number(expense[j].Date.substring(8, 10)) - 2] = expense[j].Date.substring(0, 10);
                                    last_fifteen_days_value[28 - Number(expense[j].Date.substring(8, 10)) - 2] += expense[j].MoneySpent;
                                }
                            } else {
                                if (Number(expense[j].Date.substring(8, 10)) > 30 - (15 - todays_date + 1)) {
                                    // last_fifteen_days_name[30 - Number(expense[j].Date.substring(8, 10)) - 2] = expense[j].Date.substring(0, 10);
                                    last_fifteen_days_value[30 - Number(expense[j].Date.substring(8, 10)) - 2] += expense[j].MoneySpent;
                                }
                            }
                        } else {
                            if (Number(expense[j].Date.substring(8, 10)) > 31 - (15 - todays_date + 1)) {
                                // last_fifteen_days_name[31 - Number(expense[j].Date.substring(8, 10)) - 2] = expense[j].Date.substring(0, 10);
                                last_fifteen_days_value[31 - Number(expense[j].Date.substring(8, 10)) - 2] += expense[j].MoneySpent;
                            }
                        }
                    }
                }



                if (i == current_month + 1) {
                    if (expense[j].Category == "Food") {
                        Food += expense[j].MoneySpent;
                    }
                    if (expense[j].Category == "Health") {
                        Health += expense[j].MoneySpent;
                    }
                    if (expense[j].Category == "Shopping") {
                        Shopping += expense[j].MoneySpent;
                    }
                    if (expense[j].Category == "Others") {
                        Others += expense[j].MoneySpent;
                    }
                }
            }
        }
        total_data.push({ name: month[i - 1], value: temp });
        if (i - 1 == current_month) {
            bar_graph_progress = temp;
        }
    }
    let last_ten_days_data = [];


    // if (checked) {
    //     for (let i = 0; i < 10; i++) {
    //         last_fifteen_days_data.push({ name: last_fifteen_days_name[10 - i], value: last_fifteen_days_value[14 - i] });
    //     }
    // }
    // else {

    for (let i = 0; i < 7; i++) {
        last_ten_days_data.push({ name: last_fifteen_days_name[7 - i], value: last_fifteen_days_value[7 + i + 1] });
    }
    // }
    console.log(last_fifteen_days_value);
    console.log(last_ten_days_data);
    piechart_data.push({ name: "Food", value: Food, fill: "#0088FE" });
    piechart_data.push({ name: "Health", value: Health, fill: "#00C49F" });
    piechart_data.push({ name: "Shopping", value: Shopping, fill: "#FFBB28" });
    piechart_data.push({ name: "Other", value: Others, fill: "#ff8042" });


    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'March', value: 320 },
        { name: 'Apr', value: 230 },
        { name: 'May', value: 310 },
        { name: 'Jun', value: 398 },

    ];

    const setBarGraphdata = async (e) => {
        setChecked(!checked);
        if (!checked) {
            data_to_show = last_ten_days_data;
        }
        else {
            data_to_show = last_fifteen_days_data;

        }
    }
    if (flag == 0) {
        setBarGraphdata();
        flag = 1;
    }

    return (
        <div className='dashboard-outer'>
            <div className='dashboard-upper'>

                <div className='dashboard-upper-left'>
                    <div className="linegraph dashboard-upper-left-top">
                        <h6 className='monthly-spending'>Monthly Spending</h6>

                        <LineChart
                            width={isPageBig ? window.innerWidth * 0.52 : window.innerWidth * 0.70}
                            // width={100}
                            height={300}
                            data={total_data}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"
                                width={200}

                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

                        </LineChart>
                    </div>

                    <div className="progressbar dashboard-upper-left-bottom">
                        <h6>Spent this month</h6>
                        <Progressbar bgcolor="#00d25b" progress={bar_graph_progress} total={total_budget} height={10} />
                    </div>


                </div>
                <div className="piechart dashboard-upper-right">
                    <h6>Spending in Each Category</h6>
                    <PieChart width={isPageBig ? window.innerWidth * 0.25 : window.innerWidth * 0.70} height={300}>
                        <Pie
                            dataKey="value"
                            startAngle={360}
                            endAngle={0}
                            data={piechart_data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            fill="#8884d8"
                            label
                        />
                    </PieChart>
                </div>
            </div>
            <div className="bargraph dashboard-lower">
                <h6>Spending in Last {'7'} days</h6>

                <BarChart
                    width={window.innerWidth * 0.70}
                    height={300}
                    data={data_to_show}

                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }}

                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                {/* <label className='bargraph-show-last'>
                    <input type="checkbox" checked={checked} onChange={setBarGraphdata} />
                    Show Last 7 days
                </label> */}
            </div>
        </div >

    );
};

export default Dashboard;