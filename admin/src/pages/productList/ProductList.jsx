import React, {useContext, useEffect, useState} from 'react';
import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productList } from '../../dummyData';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

export default function ProductList() {
    const [dataRow, setDataRow] = useState(productList)
    const {movies, dispatch} = useContext(MoviesContext); 

    const deleteMovieAction = async (id) => {
        try {
            await deleteMovie(id, dispatch);
            await getMovies(dispatch);
        }
        catch (err) {
            console.log("Failed to delete movie with error: " + err);
        }
    }

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch])

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'movie',
            headerName: 'Movie',
            width: 200,
            editable: true,
            renderCell: (params) => (
                <div className='productListProduct'>
                    <img src={params.row.img} alt="profile" className='productListImg'/>
                    {params.row.title}
                </div>
            )
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
            editable: true,
        },
        {
            field: 'year',
            headerName: 'Year',
            width: 120,
            editable: true,
        },
        {
            field: 'limit',
            headerName: 'Age Limit',
            width: 120,
            editable: true,
        },
        {
            field: 'isSeries',
            headerName: 'Is Series',
            width: 120,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => {
                return (
                    <div className='productListAction'>
                        <Link to={"/movies/" + params.row._id} state={{movie: params.row}}>
                            <button className="productListEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => deleteMovieAction(params.row._id)} />
                    </div>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid 
                rows={movies} 
                columns={columns} 
                pageSize={10} 
                checkboxSelection 
                disableSelectionOnClick
                getRowId={row => row._id}
            />
        </div>
    )
}