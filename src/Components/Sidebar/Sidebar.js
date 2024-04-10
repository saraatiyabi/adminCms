import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailIcon from '@mui/icons-material/Mail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link className='link' to="/">
                        <li className='sidebarListItem active'>
                            <LineStyleIcon className='sidebarListIcon' /> Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <TimelineIcon className='sidebarListIcon' />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <MonetizationOnIcon className='sidebarListIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link className='link' to="/users">
                        <li className='sidebarListItem'>
                            <GroupIcon className='sidebarListIcon' />
                            Users
                        </li>
                    </Link>
                    <Link className='link' to="/newUser">
                        <li className='sidebarListItem'>
                            <PersonAddIcon className='sidebarListIcon' />
                            New User
                        </li>
                    </Link>
                    <Link className='link' to="/products">
                        <li className='sidebarListItem'>
                            <StorefrontIcon className='sidebarListIcon' />
                            Products
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <AttachMoneyIcon className='sidebarListIcon' />
                        Transactions
                    </li>
                    <li className='sidebarListItem'>
                        <EqualizerIcon className='sidebarListIcon' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <MailIcon className='sidebarListIcon' />
                        Mail
                    </li>
                    <li className='sidebarListItem'>
                        <DynamicFeedIcon className='sidebarListIcon' />
                        Feedback
                    </li>
                    <li className='sidebarListItem'>
                        <MessageIcon className='sidebarListIcon' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <WorkOutlineOutlinedIcon className='sidebarListIcon' />
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <QueryStatsOutlinedIcon className='sidebarListIcon' />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <ReportIcon className='sidebarListIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
