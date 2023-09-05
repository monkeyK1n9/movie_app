import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"

export default function List({list}) {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === 'left' && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            setSlideNumber(slideNumber - 1)
        }
        else if (direction === 'right' && slideNumber < 5) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSlideNumber(slideNumber + 1);
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}} />
                <div className="container" ref={listRef}>
                    {list.content.map((item, index) => {
                        return (
                            <ListItem key={index} item={item} index={index}/>
                        )
                    })}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}
