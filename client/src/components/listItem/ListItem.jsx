import { Add, PlayArrow, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react";

export default function ListItem({index}) {
    const [isHoved, setIsHoved] = useState(false);

    const trailer = "https://www.youtube.com/watch?v=RbrTmC2r9nQ"
    // const trailer = "https://www.pexels.com/fr-fr/video/circulation-architecture-tour-urbain-15809929/"
    return (
        <div 
            className='listItem' 
            onMouseEnter={() => setIsHoved(true)} 
            onMouseLeave={() => setIsHoved(false)}
            style={{
                left: isHoved && index * 225 - 50 + index * 2.5
            }}
        >
            <img src="https://all-car-news.com/wp-content/uploads/2023/08/gran-turismo-2.webp" alt="" />

            {isHoved && 
                <>
                    <video src={trailer} autoPlay={true} loop/>

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>

                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>

                        <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse veniam beatae!</div>

                        <div className="genre">Action</div>
                    </div>
                </>
            }
        </div>
    )
}
