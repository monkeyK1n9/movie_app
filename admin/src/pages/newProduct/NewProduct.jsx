import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./newProduct.css"
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { createMovie } from '../../context/movieContext/apiCalls';
import { MoviesContext } from '../../context/movieContext/MovieContext';


export default function NewProduct() {
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null); 
    const [uploaded, setUploaded] = useState(0); //we wish to have 5 uploaded files, so until this is not attained, we don't show create button 
    const {dispatch} = useContext(MoviesContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;

        setMovie({...movie, [e.target.name] : value});
    }

    const upload = (items) => {
        items.forEach(item => {
            if (!item.file) return;
            const storageRef = ref(storage, `/items/${item.file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on("state_changed", snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is: " + progress + " % done");
            },
                err => (console.log(err)), //callback if there is an error
                () => { //callback when the upload is complete
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setMovie(prev => {
                            return {...prev, [item.label]: url}
                        })
                        setUploaded(prev => prev + 1);
                    })
                }
            )
        })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {file: img, label: "img"},
            {file: imgTitle, label: "imgTitle"},
            {file: imgSm, label: "imgSm"},
            {file: trailer, label: "trailer"},
            {file: video, label: "video"},
        ])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMovie(movie, dispatch);
        navigate("/movies")
    }
    
    return (
        <div className='newProduct'>
        <h1 className="newProductTitle">New Movie</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="img">Image</label>
                    <input 
                        type="file" 
                        name='img' 
                        id="img" 
                        style={{border: "none"}} 
                        onChange={e => setImg(e.target.files[0])}
                        />
                </div>
                <div className="newProductItem">
                    <label htmlFor="imgTitle">Title Image</label>
                    <input 
                        type="file" 
                        name='imgTitle' 
                        id='imgTitle' 
                        style={{border: "none"}}
                        onChange={e => setImgTitle(e.target.files[0])}
                        />
                </div>
                <div className="newProductItem">
                    <label htmlFor="imgSm">Thumbnail Image</label>
                    <input 
                        type="file" 
                        name='imgSm' 
                        id="imgSm" 
                        style={{border: "none"}}
                        onChange={e => setImgSm(e.target.files[0])}
                        />
                </div>
                <div className="newProductItem">
                    <label>Title</label>
                    <input 
                        type="text" 
                        placeholder="ex: John Wick" 
                        name='title' 
                        onChange={handleChange}
                        />
                </div>
                <div className="newProductItem">
                    <label>Description</label>
                    <input 
                        type="text" 
                        placeholder="Type a description" name='desc' 
                        onChange={handleChange}
                        />
                </div>
                <div className="newProductItem">
                    <label>Year</label>
                    <input 
                        type="text" 
                        placeholder="Year" 
                        name="year" 
                        onChange={handleChange}
                        />
                </div>
                <div className="newProductItem">
                    <label>Genre</label>
                    <input 
                        type="text" 
                        placeholder="Genre" 
                        name="genre" 
                        onChange={handleChange}
                        />
                </div>
                <div className="newProductItem">
                    <label>Duration</label>
                    <input 
                        type="text" 
                        placeholder="Duration" 
                        name='duration'
                        onChange={handleChange}
                        />
                </div>
                <div className="newProductItem">
                    <label>Limit</label>
                    <input 
                        type="text" 
                        placeholder="Limit" 
                        name='limit' 
                        onChange={handleChange}
                        />
                </div>
                <div className="newProductItem">
                    <label>Is Series</label>
                    <select name='isSeries' id='isSeries'>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label>Trailer</label>
                    <input 
                        type="file" 
                        placeholder="Video" 
                        name='trailer' 
                        onChange={e => setTrailer(e.target.files[0])}
                        />
                </div>
                <div className="newProductItem">
                    <label>Video</label>
                    <input 
                        type="file" 
                        placeholder="Video" 
                        name='video' 
                        onChange={e => setVideo(e.target.files[0])}
                        />
                </div>
                {uploaded === 5 ? (
                    <button className="newProductButton" onClick={handleSubmit}>Create</button>
                ):(
                    <button className="newProductButton" onClick={handleUpload}>Upload</button>
                )}
            </form>    
        </div>
    )
}
