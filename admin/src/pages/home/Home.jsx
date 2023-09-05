import React from "react";
import './home.css';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useMemo, useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axiosInstance";

export default function Home({}) {
    const MONTHS = useMemo(() => [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ], [])
    
    const [userStats, setUserStats] = useState([])
    
    const getStats = async () => {
        try {
            const res = await axiosInstance.get("users/stats");
        
            const statsList = res.data.sort((a, b) => a._id - b._id);

            statsList.map(item => setUserStats(prev => [
                    ...prev, 
                    {
                        name: MONTHS[item._id - 1], 
                        "New Users": item.total
                    }
                ]
            ))
        }
        catch (err) {
            console.log("Error getting user stats with error: " + err);
        }
    }

    useEffect(() => {
        getStats();
    }, [])

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart 
                chartTitle={"User Analytics"}
                data={userStats}
                dataKey={"New Users"}
                grid
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}