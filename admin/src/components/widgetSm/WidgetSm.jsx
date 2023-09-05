import React from "react";
import "./widgetSm.css"
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../axios/axiosInstance";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])

    const getNewUsers = async () => {
        try {
            const res = await axiosInstance.get("users?new=true");
            console.log(res)
            setNewUsers(res.data);
        }
        catch (err) {
            console.log("Error getting new users: " + err);
        }
    }
    useEffect(() => {
        getNewUsers();
    }, [])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Users Signed In
            </span>
            <ul className="widgetSmList">
                {newUsers.map((newUser, index) => {
                    return (
                        <li className="widgetSmListItem" key={index}>
                            <img src={newUser.profilePic || "https://i.pinimg.com/originals/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg"} alt="Profile" className="widgetSmImg"/>

                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{newUser.username}</span>
                                <span className="widgetSmUserTitle">{newUser.email}</span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon"/>
                                Display
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}