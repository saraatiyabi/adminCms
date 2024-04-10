import React from 'react'
import Features from '../../Components/Features/Features'
import Chart from '../../Components/Chart/Chart'
import {datas} from '../../Datas'
import WidgetSm from '../../Components/WidgetSm/WidgetSm.jsx'
import './Home.css';
import WidgetLg from '../../Components/WidgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <Features />
      <Chart title="Month Sale" data={datas} grid dataKey="sale"/>
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
