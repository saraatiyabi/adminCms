import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,CartesianGrid,Tooltip} from 'recharts';
import './Chart.css'
export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={data}>
                <Line type="monotone" stroke="#8884d8" dataKey={dataKey} />
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Tooltip />
                {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5"></CartesianGrid>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
