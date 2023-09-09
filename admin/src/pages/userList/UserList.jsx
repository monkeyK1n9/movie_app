import React, {useState} from 'react';
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userList } from '../../dummyData';
import { Link } from 'react-router-dom';




export default function UserList() {
    const [dataRow, setDataRow] = useState(userList)

    const deleteUser = (id) => {
        const newDataRow = dataRow.filter(user => user.id !== id)
        setDataRow(newDataRow);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            editable: true,
            renderCell: (params) => (
                <div className='userListUser'>
                    <img src={params.row.avatar} alt="profile" className='userListImg'/>
                    {params.row.username}
                </div>
            )
        },
        {
            field: 'email',
            headerName: 'Email',
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
            field: 'transactions',
            headerName: 'Transactions',
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
                    <div className='userListAction'>
                        <Link to={"/users/" + params.row.id}>
                            <button className="userListEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={() => deleteUser(params.row.id)} />
                    </div>
                )
            }
        }
    ];

    return (
        <div className="userList">
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