import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import { Link, useLocation } from "react-router-dom"

export default function Watch() {
    const location = useLocation()

    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                        <ArrowBackOutlined />
                        Home
                </div>
            </Link>

            <video 
                className="video" 
                autoPlay 
                progress 
                controls 
                src={location.state?.movie.video}
            />
        </div>
    )
}
