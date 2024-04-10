import React,{ useState } from 'react'
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../Datas';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function UserList() {
  const [userDatas , setUserDatas] = useState(userRows);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userId , setUserId ] = useState("")

  const addNewUserRow = () => {
    const newUserRow = {
      id : 7, 
      username : "Luna Smith",
      avatar : "images/admin.jpg",
      status : "active",
      transactions : "$128.53",
      email : "Lunasmith@gmail.com"
    }
    setUserDatas(prevUsers => {
      return ([...prevUsers,newUserRow])
    })
    console.log(userDatas)
  }
  const deleteUserHandler = (userId) => {
    setUserDatas(userDatas.filter(user => {
      return user.id !== userId
    }))
    setShowDeleteModal(false)
  }
  const columns = [
    {
      field : "id",
      headerName : "Id",
      width : 90
    },
    {
      field : "user",
      headerName : "User",
      width : 220,
      renderCell : (params) => {
        console.log(params)
        return (
          <div className='usersListItem'>
            <img src={params.row.avatar} className='usersListImg'></img>
            <span>{params.row.username}</span>
          </div>
        )
      }
    },
    {
      field : "email",
      headerName : "Email",
      width : 250
    },
    {
      field : "transactions",
      headerName : "Transactions",
      width : 200
    },
    {
      field : "userStatus",
      headerName : "Status",
      width : 120,
      renderCell : (params) => {
        return (
          <span className={`status ${params.row.status === "active" ? "active" : "banned"}`}>{params.row.status}</span>
        )
      }
    },
    {
      field : "actions",
      headerName : "Actions",
      renderCell : (params) => {
        return(
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className='usersListItemBtn'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='usersListIcon' onClick={() => {
              setShowDeleteModal(true)
              setUserId(params.row.id)
            }} />
          </>
        )
      }
    }
  ]
  return (
    <div className='usersList'>
      <div className='dataGridContainer'>
      <DataGrid className="datGrid" rows={userDatas} columns={columns} 
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
          pageSizeOptions={[5]}
        disableRowSelectionOnClick
        editMode="row"
        />
      </div>

      {/* delete Modal */}
      <div className={`modal ${showDeleteModal ? "show" : ""}`}>
        <div className='modal-content'>
          <div className='modal-header'>
            <CloseIcon className='closeBtn' onClick={() => setShowDeleteModal(false)} />
          </div>
          <div className='modal-body'>
            <span className='modal-title'>Do you want to delete this user?</span>
          </div>
          <div className='modal-footer'>
            <button className='modalDeleteBtn' onClick={() => deleteUserHandler(userId)}>Yes, delete</button>
            <button className='modalCancelBtn' onClick={() => setShowDeleteModal(false)}>cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}
