import Calendarm from "./calendar";
import DayChart from "./daydonut";
import ListExpenses from "./ListExpenses";
import React from "react";

const Expenses = () => {
    return (
        <div class="flex">
            <div>
                <div class="px-16">
                    <Calendarm />
                </div>
                <div>
                    <DayChart />
                </div>
            </div>
            <div class="w-full px-16 ">
                <ListExpenses />
            </div>
        </div>
    );
};

export default Expenses;