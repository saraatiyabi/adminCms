import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import './TopBar.css'
export default function TopBar() {
  return (
    <div className='topBar'>
        <div className='topBarWrapper'>
            <div className='topLeft'>
                <span>SabzLearn</span>
            </div>
            <div className='topRight'>
                <div className='topBarIconContainer'>
                    <NotificationsIcon />
                    <span className='badge'>3</span>
                </div>
                <div className='topBarIconContainer'>
                    <LanguageIcon />
                    <span className='badge'>3</span>
                </div>
                <div className='topBarIconContainer'>
                    <SettingsIcon />
                </div>
                <img src='/images/admin.jpg' alt='admin' className='adminImg'></img>
            </div>
        </div>
    </div>
  )
}
