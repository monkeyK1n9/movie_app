import React, {useState} from 'react';
import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productList } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [dataRow, setDataRow] = useState(productList)

    const deleteUser = (id) => {
        const newDataRow = dataRow.filter(user => user.id !== id)
        setDataRow(newDataRow);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'name',
            headerName: 'Product',
            width: 200,
            editable: true,
            renderCell: (params) => (
                <div className='productListProduct'>
                    <img src={params.row.img} alt="profile" className='productListImg'/>
                    {params.row.name}
                </div>
            )
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='productListAction'>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => deleteUser(params.row.id)} />
                    </div>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid 
                rows={dataRow} 
                columns={columns} 
                pageSize={10} 
                checkboxSelection 
                disableSelectionOnClick
            />
        </div>
    )
}