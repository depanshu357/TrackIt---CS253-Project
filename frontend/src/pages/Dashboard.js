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
import ExpenseDetails from "../Components/ExpenseDetails";
import ExpenseForm from "../Components/ExpenseForm";
import DuesDetailsForCustomer from "../Components/DuesDetailsForCustomer"
// const data1 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },

// ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let data_to_show;


const Dashboard = () => {

    const { expense, dispatch } = useExpenseContext();
    const { user } = useAuthContext();
    const [borrows, setBorrows] = useState(null);
    const { Dues, dispatch: dispatchd } = useDuesContext();
    const [checked, setChecked] = useState(false);

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
            console.log(user.rollNo);
        }
    }, [dispatch, user]);
    let Food = 0;
    let Health = 0;
    let Shopping = 0;
    let Others = 0;
    var date = new Date(); var current_month = date.getMonth(); var todays_date = date.getDate(); var current_year = date.getFullYear();
    var total_data = [];
    var last_ten_days_name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",];
    var last_ten_days_value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var last_ten_days_data = [];
    var piechart_data = [];
    var bar_graph_progress = 0;
    var total_budget = 500000;
    for (let i = 1; i <= 12; i++) {
        let temp = 0;
        for (let j = 0;expense &&  j < expense.length; j++) {
            // console.log(expense[j].Date[5] + expense[j].Date[6], current_month);
            if (expense[j].Date[5] + expense[j].Date[6] == current_month + 1) {
                bar_graph_progress += expense[j].MoneySpent;
            }
            if (expense[j].Date[5] + expense[j].Date[6] == i) {
                temp += expense[j].MoneySpent;


                if (todays_date >= 11) {
                    if (expense[j].Date.substring(0, 4) == current_year && expense[j].Date[5] + expense[j].Date[6] == current_month + 1) {
                        if (Number(todays_date) - Number(expense[j].Date.substring(8, 10)) <= 10 && Number(todays_date) - Number(expense[j].Date.substring(8, 10)) > 0) {
                            last_ten_days_name[10 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] = expense[j].Date.substring(0, 10);
                            last_ten_days_value[10 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] += expense[j].MoneySpent;
                        }
                    }
                }
                else {
                    if (expense[j].Date.substring(0, 4) == current_year && expense[j].Date[5] + expense[j].Date[6] == current_month + 1) {
                        if (Number(todays_date) - Number(expense[j].Date.substring(8, 10)) <= 10 && Number(todays_date) - Number(expense[j].Date.substring(8, 10)) > 0) {
                            last_ten_days_name[10 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] = expense[j].Date.substring(0, 10);
                            last_ten_days_value[10 - (Number(todays_date) - Number(expense[j].Date.substring(8, 10)))] += expense[j].MoneySpent;
                        }
                    }
                    else if (expense[j].Date.substring(0, 4) == current_year && expense[j].Date[5] + expense[j].Date[6] == current_month) {
                        if (current_month == 2 || current_month == 4 || current_month == 6 || current_month == 7 || current_month == 9 || current_month == 11) {
                            if (current_month == 2) {
                                if (Number(expense[j].Date.substring(8, 10)) > 28 - (10 - todays_date + 1)) {
                                    last_ten_days_name[28 - Number(expense[j].Date.substring(8, 10)) - 2] = expense[j].Date.substring(0, 10);
                                    last_ten_days_value[28 - Number(expense[j].Date.substring(8, 10)) - 2] += expense[j].MoneySpent;
                                }
                            } else {
                                if (Number(expense[j].Date.substring(8, 10)) > 30 - (10 - todays_date + 1)) {
                                    last_ten_days_name[30 - Number(expense[j].Date.substring(8, 10)) - 2] = expense[j].Date.substring(0, 10);
                                    last_ten_days_value[30 - Number(expense[j].Date.substring(8, 10)) - 2] += expense[j].MoneySpent;
                                }
                            }
                        } else {
                            if (Number(expense[j].Date.substring(8, 10)) > 31 - (10 - todays_date + 1)) {
                                last_ten_days_name[31 - Number(expense[j].Date.substring(8, 10)) - 2] = expense[j].Date.substring(0, 10);
                                last_ten_days_value[31 - Number(expense[j].Date.substring(8, 10)) - 2] += expense[j].MoneySpent;
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
    }

    for (let i = 0; i < 10; i++) {
        last_ten_days_data.push({ name: last_ten_days_name[i], value: last_ten_days_value[i] });
    }

    // bar_graph_progress = (bar_graph_progress * 100) / total_budget;
    // bar_graph_progress = bar_graph_progress > 100 ? 100 : Math.round(bar_graph_progress);


    piechart_data.push({ name: "Food", value: Food });
    piechart_data.push({ name: "Health", value: Health });
    piechart_data.push({ name: "Shopping", value: Shopping });
    piechart_data.push({ name: "Other", value: Others });

    // console.log(bar_graph_progress, "Hello");

    console.log(expense);
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
            data_to_show = total_data;

        }
    }

    return (
        <div className='dashboard-outer'>
            <div className='dashboard-upper'>

                <div className='dashboard-upper-left'>
                    <div className="linegraph dashboard-upper-left-top">

                        <LineChart
                            width={window.innerWidth * 0.68}
                            // width={100}
                            height={300}
                            data={data_to_show ? data_to_show : total_data}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

                        </LineChart>
                    </div>

                    <div className="progressbar dashboard-upper-left-bottom">
                        <Progressbar bgcolor="cyan" progress={bar_graph_progress} total={total_budget} height={10} />
                    </div>


                </div>
                <div className="piechart dashboard-upper-right">
                    <PieChart width={window.innerWidth * 0.32} height={300}>
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

                <BarChart
                    // width={window.innerWidth * 0.90}
                    width={1300}
                    height={300}
                    data={data_to_show ? data_to_show : total_data}
                    // data={data}

                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                <label className='bargraph-show-last'>
                    <input type="checkbox" checked={checked} onChange={setBarGraphdata} />
                    Show Last 10 days
                </label>
            </div>
        </div>

    );
};

export default Dashboard;