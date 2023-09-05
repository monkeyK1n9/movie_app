import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,415 XAF</span>
                    <span className="featuredMoneyRate">
                        -11.4% <ArrowDownward className="featuredIcon negative"/> 
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">52,975 XAF</span>
                    <span className="featuredMoneyRate">
                        -1.4% <ArrowDownward className="featuredIcon negative"/> 
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">3,923 XAF</span>
                    <span className="featuredMoneyRate">
                        31.4% <ArrowUpward className="featuredIcon"/> 
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}