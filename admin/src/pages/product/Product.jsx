import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">
                        Create
                    </button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/17748758/pexels-photo-17748758/free-photo-of-bois-lumineux-soleil-couchant-rue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales: </span>
                            <span className="productInfoValue">4123 XAF</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label>Active</label>
                        <select name="active" id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>In stock</label>
                        <select name="inStock" id='idStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/17748758/pexels-photo-17748758/free-photo-of-bois-lumineux-soleil-couchant-rue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="productUploadImg" />
                            <label htmlFor='file' >
                                <Publish className="productUploadIcon"/>
                            </label>
                            <input type="file" name="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
