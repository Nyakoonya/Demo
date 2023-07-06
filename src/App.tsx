// import React from "react";
import { Routes, useLocation } from 'react-router-dom'
import RouteTable from '@/router'
import './App.css'
import lessStyles from './app.less'
import scssStyles from './app.scss'
import stylStyles from './app.styl'
import memberList from './test.json'
import Class from '@/components/Class'
import Layout from '@/views/Layout'

console.log('memberList', memberList);
console.log('RouteTable', RouteTable)
function App() {
  // const location = useLocation();
  // console.log('location', location);
  return <div>
    {/* <h2>webpack5-react-ts</h2>
    <div className={lessStyles['lessBox']}>
      <div className={lessStyles['box']}>lessBox</div>
    </div>
    <div className={scssStyles['scssBox']}>
      <div className={scssStyles['box']}>scssBox</div>
    </div>
    <div className={stylStyles['stylBox']}>
      <div className={stylStyles['box']}>stylBox</div>
    </div>
    <Class /> */}
    {/*  */}
    {/* {location.pathname.includes('/login') ? <RouteTable /> : <Layout>
      <RouteTable />
    </Layout>} */}
    <RouteTable />

  </div>
}

export default App;
