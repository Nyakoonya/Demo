// entrance page of react app
// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';

import { HashRouter as Router } from 'react-router-dom';
import routers from './router'
import { store } from './redux/Store'
import { ConfigProvider } from 'antd';
const root = document.getElementById('root');

console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)
console.log("process.env", process.env);

if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <Router>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: '#3778ff',
              borderRadius: 2,
            },
            components: {
              Breadcrumb: {
                /* here is your component tokens */
                fontSize: 14,
                iconFontSize: 16,
                linkHoverColor: '#3778ff'
              },
            }
          }}
        >
          <App />
        </ConfigProvider>
      </Router>
    </Provider>
  )
}