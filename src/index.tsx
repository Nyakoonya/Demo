// entrance page of react app
// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';

import { HashRouter as Router } from 'react-router-dom';
import routers from './router'
import store from './redux/Store'
const root = document.getElementById('root');

console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)
console.log("process.env", process.env);

if (root) {
    createRoot(root).render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}