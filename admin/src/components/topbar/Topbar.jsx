import React from 'react';
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/17748758/pexels-photo-17748758/free-photo-of-bois-lumineux-soleil-couchant-rue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}