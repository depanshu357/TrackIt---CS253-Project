import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ExpenseContextProvider } from './context/ExpenseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <ExpenseContextProvider>
            <App />
        </ExpenseContextProvider>
    </AuthContextProvider>
);


