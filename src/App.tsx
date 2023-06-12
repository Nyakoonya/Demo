// import React from "react";
import { Routes } from 'react-router-dom'
import RouteTable from '@/router'
import '@/App.css'
import lessStyles from './app.less'
import scssStyles from './app.scss'
import stylStyles from './app.styl'
import memberList from './test.json'
import Class from '@/components/Class'

console.log('memberList', memberList);
function App() {
  return <div>
    <h2>webpack5-react-ts</h2>
    <div className={lessStyles['lessBox']}>
      <div className={lessStyles['box']}>lessBox</div>
    </div>
    <div className={scssStyles['scssBox']}>
      <div className={scssStyles['box']}>scssBox</div>
    </div>
    <div className={stylStyles['stylBox']}>
      <div className={stylStyles['box']}>stylBox</div>
    </div>
    <Class />
    {/*  */}

    <RouteTable />
  </div>
}

export default App;
