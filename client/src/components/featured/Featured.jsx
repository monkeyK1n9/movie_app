import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured() {
    return (
        <div className='featured'>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/The-matrix-logo.svg/1280px-The-matrix-logo.svg.png" alt="" />

                <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe accusamus obcaecati velit animi consequuntur, cumque eum hic fugiat alias quisquam veniam. Temporibus officiis tenetur expedita error minima, nihil non provident.</span>

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
