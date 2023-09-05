import { Add, PlayArrow, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios/axiosInstance";
import { Link } from "react-router-dom";

export default function ListItem({item, index}) {
    const [isHoved, setIsHoved] = useState(false);
    const [listItem, setListItem] = useState({});

    const getListItemFromId = async (id) => {
        try {
            const res = await axiosInstance.get(`movies/find/${id}`);
            setListItem(res.data);
        }
        catch(err) {
            console.log("Error getting list item: " + err);
        }
    }

    useEffect(() => {
        getListItemFromId(item);
    }, [item])
    return (
        <Link to="/watch" state={{movie: listItem }}>
        <div 
            className='listItem' 
            onMouseEnter={() => setIsHoved(true)} 
            onMouseLeave={() => setIsHoved(false)}
            style={{
                left: isHoved && index * 225 - 50 + index * 2.5
            }}
        >
            <img src={listItem.img} alt="" />

            {isHoved && 
                <>
                    <video src={listItem.trailer} autoPlay={true} loop/>

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>

                        <div className="itemInfoTop">
                            <span>{listItem.duration}</span>
                            <span className="limit">+{listItem.limit}</span>
                            <span>{listItem.year}</span>
                        </div>

                        <div className="desc">{listItem.desc}</div>

                        <div className="genre">{listItem.genre}</div>
                    </div>
                </>
            }
        </div>
        </Link>
    )
}
