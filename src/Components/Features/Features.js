import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Feauture.css'
export default function Features() {
  return (
    <div className='features'>
        <div className='featureItem'>
            <h3 className='featureTitle'>Revanue</h3>
            <div className='featureContainer'>
                <div className='featureMoney'>
                    2.415$
                </div>
                <div className='featureRate'>
                    -11.4
                    <ArrowDownwardIcon className='featureIcon negative' />
                </div>
            </div>
            <span className='featureSub'>Compared To Last Month</span>
        </div>
        <div className='featureItem'>
            <h3 className='featureTitle'>Sales</h3>
            <div className='featureContainer'>
                <div className='featureMoney'>
                    $2.225
                </div>
                <div className='featureRate'>
                    -1.4
                    <ArrowDownwardIcon className='featureIcon negative' />
                </div>
            </div>
            <span className='featureSub'>Compared To Last Month</span>
        </div>
        <div className='featureItem'>
            <h3 className='featureTitle'>Cost</h3>
            <div className='featureContainer'>
                <div className='featureMoney'>
                    $4.415
                </div>
                <div className='featureRate'>
                    +2.4
                    <ArrowUpwardIcon className='featureIcon' />
                </div>
            </div>
            <span className='featureSub'>Compared To Last Month</span>
        </div>
    </div>
  )
}
