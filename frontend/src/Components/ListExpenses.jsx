
import React, { useState, useEffect } from "react";
//import { useAuthContext } from "../hooks/useAuthContext";
// import { useExpenseContext } from "../hooks/useExpenseContext";
// import { render } from "react-dom";
//import './calendarMonth.css';
// import Features from "./Features";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import AddExpense from './AddExpense.js';




const ListExpenses = () => {
    const names = [
        {
          id: "123",
          description: "f",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "May 6 2023",
          Money: "78",
        },
        {
          id: "345",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "234",
          description: "fffffffffffffff fffffffffffffffffff fffffffffffffffff f fffffffffffffff fffffffffff fffffffffff ffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: "78",
        },
        {
          id: "3645",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "3456",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "3465",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "123",
          description: "f",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "May 6 2023",
          Money: "78",
        },
        {
          id: "345",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "234",
          description: "fffffffffffffff fffffffffffffffffff fffffffffffffffff f fffffffffffffff fffffffffff fffffffffff ffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: "78",
        },
        {
          id: "3645",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "3456",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "3465",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "123",
          description: "f",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "May 6 2023",
          Money: "78",
        },
        {
          id: "345",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "234",
          description: "fffffffffffffff fffffffffffffffffff fffffffffffffffff f fffffffffffffff fffffffffff fffffffffff ffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: "78",
        },
        {
          id: "3645",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "3456",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        },
        {
          id: "3465",
          description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
          name: "Hall 1 Canteen",
          type: "Food",
          Date: "2023-03-12",
          Money: 68,
        }
      ];

      const renderListOfUserNames = (namesdate) => {

        return namesdate &&  namesdate.map((name) => (
            <tr class="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-3 flex items-center">
            <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="w-auto h-8 mr-3"/>
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
            {/* <td scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
            </td> */}
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
                {/* <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
        <tbody>
        {renderListOfUserNames(names)}
        </tbody>
    </table>
</div>
 );
};

export default ListExpenses;

