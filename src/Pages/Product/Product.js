import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Product.css';
import AddIcon from '@mui/icons-material/Add';
import Chart from '../../Components/Chart/Chart';
import { sales } from '../../Datas';
import { useParams } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';
import { products } from '../../Datas';

export default function Product() {
  const [productsData,setProductsData] = useState(products)
  const [mainProduct,setMainProduct] = useState({})
  const [showFileInput,setShowInputFile] = useState(false)
  const params = useParams();

  useEffect(() => {
    console.log(params.productId)
    const editedProduct = productsData.find((product) => {
      return product.id == params.productId;
    })
    console.log(editedProduct)
    setMainProduct(editedProduct)
  },[mainProduct])

  return (
    <div className='product'>
        <div className='productContainer'>
            <h2>Product</h2>
            <Link to="/newProduct" style={{textDecoration : "none"}}>
              <button className='createProductBtn'>
                <AddIcon />
                Add New
              </button>
            </Link>
        </div>

        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart title="Product Sale" data={sales} dataKey="sale" width={500} grid />
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <img className='productInfoImg' alt='product' src={mainProduct.avatar}></img>
              <span className='productInfoTitle'>{mainProduct.title} LapTop</span>
            </div>

            <div className='productInfoBottom'>
              <div className='productInfoItem'>
                <div className='productInfoKey'>Product Id</div>
                <div className='productInfoValue'>{mainProduct.id}</div>
              </div>
              <div className='productInfoItem'>
                <div className='productInfoKey'>Brand</div>
                <div className='productInfoValue'>{mainProduct.brand}</div>
              </div>
              <div className='productInfoItem'>
                <div className='productInfoKey'>Price</div>
                <div className='productInfoValue'>${mainProduct.price}</div>
              </div>
              <div className='productInfoItem'>
                <div className='productInfoKey'>Total Sale</div>
                <div className='productInfoValue'>${mainProduct.totalSale}</div>
              </div>
              <div className='productInfoItem'>
                <div className='productInfoKey'>Inventory</div>
                <div className='productInfoValue'>{mainProduct.inventory ? mainProduct.inventory : "Currently unavailable."}</div>
              </div>
              <div className='productInfoItem'>
                <div className='productInfoKey'>Color</div>
                <div className='productInfoValue'>{mainProduct.color}</div>
              </div>
            </div>
          </div>
        </div>

        <div className='productBottom'>
          <form className='productForm'>
            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type='text' placeholder='product title...'></input>

              <label>Product Price</label>
              <input type='number' min={0} placeholder='product price...'></input>

              <label>Available</label>
              <select>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div className='productFormRight'>
              <div className='productUploader'>
                <img style={{width:"100px"}} src={mainProduct.avatar}></img>
                <label>
                  <PublishIcon />
                </label>
              </div>
                <button className='productAddBtn' onClick={(e)=>{
                  e.preventDefault();
                  setShowInputFile(true)
                }}>Upload Photo</button>
                <input type="file" className ={`fileInput ${showFileInput ? "show" : ""}`} showFileInput={showFileInput}></input>
            </div>
          </form>
        </div>
    </div>
  )
}
