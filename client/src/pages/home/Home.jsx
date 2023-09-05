import { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { axiosInstance } from "../../axios/axiosInstance";

export default function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState("");

    const getRandomList = async () => {
        try {
            const res = await axiosInstance.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`);

            setLists(res.data)
        }
        catch (err) {
            console.log("Error fetching list: " + err);
        }
    }
    useEffect(() => {
        getRandomList(); 
    }, [type, genre])

    return (
        <div className="home">
            <Navbar />

            <Featured type={type}/>

            {lists.map((list, index) => {
                return (
                    <List key={index} list={list}/>
                )
            })}

        </div>
    )
}
