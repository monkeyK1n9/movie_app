import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"
import { axiosInstance } from "../../axios/axiosInstance";
import { useEffect, useState } from "react";

export default function Featured({type}) {
    const [content, setContent] = useState({});

    const getRandomContent = async () => {
        try {
            const res = await axiosInstance.get(`/movies/random?type=${type}`);
            console.log(res)
            setContent(res.data[0]);
        }
        catch (err) {
            console.log("Failed to get random content with error: " + err);
        }
    }
    useEffect(() => {
        getRandomContent();
    }, [])
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantesy</option>
                        <option value="historical">Historical</option>
                        <option value="horro">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />

            <div className="info">
                <img src={content.imgTitle} alt="" />

                <span className="desc">{content.desc}</span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
