
import React, { useState, useEffect } from "react";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PaymentsIcon from "@mui/icons-material/Payments";
//import { useAuthContext } from "../hooks/useAuthContext";
// import { useExpenseContext } from "../hooks/useExpenseContext";
// import { render } from "react-dom";
//import './calendarMonth.css';
// import Features from "./Features";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import AddExpense from './AddExpense.js';




const ListBorrowings = () => {
    const names = [
        {
          id: "123",
          description: "f",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "May 6 2023",
          Money: "78",
          Paid: "Not Paid"
        },
        {
          id: "345",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
          Paid: "Paid"
        },
        {
          id: "234",
          description: "fffffffffffffff fffffffffffffffffff fffffffffffffffff f fffffffffffffff fffffffffff fffffffffff ffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: "78",
          Paid: "Paid"
        },
        {
          id: "3645",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
          Paid: "Not Paid"
        },
        {
          id: "3456",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
          Paid: "Not Paid"
        },
        {
          id: "3465",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
          Paid: "Paid"
        }
      ];

      const renderListOfUserNames = (namesdate) => {


        return namesdate &&  namesdate.map((name) => (
            
            <tr class="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-3 flex items-center">
                        {name.name}
            </th>
            <td scope="row" class="px-6 py-3">
                {name.Date}
            </td>
            <td scope="row" class="px-6 py-3">
                {name.type}
            </td>
            <td scope="row" class="px-6 py-3">
                {name.Money + "/-"}
            </td>
            <td scope="col" class="px-6 py-3">
            <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                {name.Paid}
            </span>
            {/* <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                Unavailable
            </span> */}
            </td>
        </tr>
    
        ));
      };

  return (<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
        {renderListOfUserNames(names)}
        </tbody>
    </table>
</div>
 );
};

export default ListBorrowings;

