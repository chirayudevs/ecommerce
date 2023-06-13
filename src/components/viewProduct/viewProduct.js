import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Modal, theme } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { RequestProduct } from '../../redux/selectProduct/actions';
import Comments from "../commentBox/comments";
import './viewProduct.scss';

const { Header, Content, Footer, Sider } = Layout;

const ViewProduct = (props) => {

  const { commentLine } = props;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const singleProduct = useSelector(state => state.singleProduct.getProduct);
  const comments = useSelector(state => state.singleProduct.getProduct.comment);

  console.log('singleProduct new', singleProduct);
  console.log('comments', comments);
  const { _id } = useParams();
  console.log('Id >>>', _id);

  console.log('commentLine ---', commentLine);

  useEffect(() => {
    dispatch(RequestProduct(_id));
  }, [dispatch]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditProductClick = (product) => {
    setIsEditing(true);

    setProduct({...product})
    console.log('edit product', product);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={singleProduct?.product?.category}
              name="category"
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={singleProduct?.product?.description}
              name="description"
            />
          </div>
          <div>
            <label>Image</label>
            <img
              src={singleProduct?.product?.image}
              alt='test'
              className='product-image-container'
            />
          </div>
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
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: 'left',
          }}
        >
          <Comments
            currentUserId="1"
          />
          {commentLine}
        </Footer>
      </Layout>
    </div>
  )
};

export default ViewProduct;
