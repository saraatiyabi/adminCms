import React,{ useState } from 'react'
import './Products.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { products } from '../../Datas';

export default function Products() {
  const [productsDatas , setProductsDatas] = useState(products);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productId , setProductId ] = useState("")

  // const addNewProductRow = () => {
  //   const newUserRow = {
  //     id : 7, 
  //     username : "Luna Smith",
  //     avatar : "images/admin.jpg",
  //     status : "active",
  //     transactions : "$128.53",
  //     email : "Lunasmith@gmail.com"
  //   }
  //   setProductsDatas(prevUsers => {
  //     return ([...prevUsers,newUserRow])
  //   })
  //   console.log(productsDatas)
  // }
  const deleteProductHandler = (productId) => {
    console.log(productId)
    setProductsDatas(productsDatas.filter(product => {
      return product.id !== productId
    }))
    setShowDeleteModal(false)
  }
  const columns = [
    {
      field : "id",
      headerName : "Id",
      width : 150
    },
    {
      field : "title",
      headerName : "Title",
      width : 250,
      renderCell : (params) => {
        return (
          <div className='productItem'>
            <img src={params.row.avatar} className='productImg'></img>
            <span>{params.row.title}</span>
          </div>
        )
      }
    },
    {
      field : "Price",
      headerName : "Price",
      width : 220,
      renderCell : (params) => {
        return(
          <>
            <span>${params.row.price}</span>
          </>
        )
      }
    },
    {
      field : "actions",
      headerName : "Actions",
      width : 300,
      renderCell : (params) => {
        return(
          <>
            <Link to={`/products/${params.row.id}`}>
              <button className='productsIEditBtn'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='productDeleteIcon' onClick={() => {
              setShowDeleteModal(true)
              setProductId(params.row.id)
            }} />
          </>
        )
      }
    }
  ]
  return (
    <div className='productsList'>
      <div className='dataGridContainer'>
      <DataGrid className="datGrid" rows={productsDatas} columns={columns} 
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
            <button className='modalDeleteBtn' onClick={() => deleteProductHandler(productId)}>Yes, delete</button>
            <button className='modalCancelBtn' onClick={() => setShowDeleteModal(false)}>cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}

