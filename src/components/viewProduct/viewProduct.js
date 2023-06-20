import React, { useState, useEffect } from 'react';
import {Breadcrumb, Button, Layout, Modal, theme} from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { DeleteProductRequest, EditProductRequest, RequestProduct } from '../../redux/selectProduct/actions';
import './viewProduct.scss';
import CommentsNew from "../commentBox/commentsNew";
import { AddOrderToCartRequest } from "../../redux/orders/actions";

const { Header, Content, Footer, Sider } = Layout;

const ViewProduct = (props) => {

  const { _id } = useParams();
  const [productCount, setProductCount] = useState(0);

  const initialValue = {
    product : [{
      productId: _id,
      quantity: productCount
    }]
  };

  const { commentLine } = props;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addProductModal, setAddProductModal] = useState(false);
  const singleProduct = useSelector(state => state.singleProduct.getProduct);
  const [selectedValue, setSelectedValue] = useState('');
  const [product, setProduct] = useState(singleProduct?.product);
  const comments = useSelector(state => state.singleProduct.getProduct.comment);
  const [addToCart, setAddToCart] = useState(initialValue);

  useEffect(() => {
    setProduct(singleProduct?.product)
  }, [singleProduct.product]);

  useEffect( () => {
    dispatch(RequestProduct(_id));
  }, [dispatch]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showAddProductModal = () => {
    setAddProductModal(true);
  };

  const handleClickOk = (event) => {
    event.preventDefault();
    setAddToCart({...addToCart, product: [{
      quantity: productCount
      }]});
    console.log('product count', productCount)
    console.log('addToCart', addToCart);
    dispatch(AddOrderToCartRequest(addToCart));
  };

  const handleClickOnCancel = () => {
    setAddProductModal(false);
  };

  const handleProductCounter = () => {

  };

  const handleOk = async (event) => {
    event.preventDefault();
    dispatch(EditProductRequest(product._id, product));
    console.log('product', product)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onChangeHandler = async (e) => {
    setSelectedValue(e.target.value);

    const { name, value } = e.target;

    setProduct({...product, [name]: value})

    if (e.target.files?.length > 0) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file)
      setProduct({...product, image: base64})
      console.log('edit', product)
      document.getElementById('updatedImage').src = window.URL.createObjectURL(file);
    }
  };

  const handleClickOnDelete = () => {
    dispatch(DeleteProductRequest(_id));
  };

  const handleEditProductClick = (product) => {
    setIsEditing(true);

    setProduct({...product})
    console.log('edit product', product);
  };

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrement = () => {
    if(productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div>
            <label> name </label>
            <input type="text" value={product?.name} name="name" title="name" onChange={onChangeHandler}/>
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              title="name"
              value={product?.category}
              name="category"
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label> Price </label>
            <input type="number" value={product?.price} name="price" title="price" onChange={onChangeHandler}/>
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              title="description"
              value={product?.description}
              name="description"
              onChange={onChangeHandler}
            />
          </div>
          {/*<div>
            <label>Image</label>
            <img
              id = "updatedImage"
              src={product?.image}
              alt='test'
              className='product-image-container'
              height= "100"
              width="100"
            />
            <input type="file" name="image" title="image" accept="image/*" onChange={onChangeHandler}/>
          </div>*/}
        </div>
      </Modal>

      <Modal open={addProductModal} onOk={handleClickOk} okText={'Add To Cart'} onCancel={handleClickOnCancel}>
        <div key={singleProduct?.product?._id}>
          Add to cart:
          <Button type="primary" shape="circle" onClick={handleDecrement}>-</Button>
            {productCount}
          <Button type="primary" shape="circle" onClick={handleIncrement}>+</Button>
        </div>
      </Modal>

      <Layout>
        <Header className="view-product-header">
          <div className="demo-logo" />
          <div>Product</div>
        </Header>
        <Content className="view-product-content">
          <Breadcrumb
            className='view-product-breadcrumb'
            items={[
              {
                title: <a href='/home'>Home</a>,
              },
              {
                title: 'Selected  Product',
              },
            ]}
          />
          <Layout
            style={{
              padding: '24px 0',
              background: colorBgContainer,
            }}
          >
            <Sider
              style={{
                background: colorBgContainer,
              }}
              width={400}
            >
              <img
                src={singleProduct?.product?.image}
                alt='test'
                className='product-image-container'
              />
            </Sider>
            <Content
              style={{
                padding: '0 24px',
                minHeight: 280,
                position: 'relative',
                top: '20px'
              }}
            >
              <div className="product-description-main">
                <div className="product-description-wrapper">
                  <div className="description-header">
                    {singleProduct?.product?.category}
                  </div>
                  <div>
                    {singleProduct?.product?.description}
                  </div>
                </div>
                <div>
                  {

                    <button onClick={showModal}>Edit Product</button>
                  }
                </div>
                <div>
                  {

                    <button onClick={handleClickOnDelete}>Delete Product</button>
                  }
                </div>
                <div>
                  {

                    <button onClick={showAddProductModal}>Add Product</button>
                  }
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: 'left',
          }}
        >
          <CommentsNew
            currentUserId="1"
          />
          {commentLine}
        </Footer>
      </Layout>
    </div>
  )
};

export default ViewProduct;
