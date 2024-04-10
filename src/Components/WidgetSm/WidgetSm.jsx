import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSm.css'
import { users } from '../../Datas';
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <h3 className='widgetSmTitle'>New Joined Members</h3>
        <ul className='widgetSmList'>
        {users.map(user => (
            <li className='widgetSmListItem'>
                <img src={user.img} alt='admin' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>{user.username}</span>
                    <span className='widgetSmUserTitle'>{user.title}</span>
                </div>
                <button className='widgetSmBtn'>
                    <VisibilityIcon className='widgetSmIcon' />
                </button>
            </li>
        ))}
        </ul>
    </div>
  )
}
