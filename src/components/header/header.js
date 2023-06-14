import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { AddProductAction } from '../../redux/addProduct/actions';
import './header.scss';

const Header = (userName) => {

  const initialValues = {
    name: '',
    category: '',
    price: '',
    description: '',
    image: ''
  };

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [product, setProduct] = useState(initialValues);
  const login = useSelector(state => state.logIn.login);
  const user = login?.data?.user?.username[0];
  console.log('login', login)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(AddProductAction(product));
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

      document.getElementById('images').src = window.URL.createObjectURL(file);
    }
  };

  return (
    <header className="header-main">
      <div className="header-left-side">
        E-commerce Store
      </div>
      <div>
        <input type="text"/>
        <Button ghost={true}>
          <SearchOutlined />
        </Button>
      </div>
      <div className="header-right-side">
        <Button ghost={true} onClick={showModal}>
          Add Product
        </Button>

        <Modal title="Add Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <form>
            <div>
              <label> name </label>
              <input type="text" name="name" title="name" onChange={onChangeHandler}/>
            </div>

            <div>
              <label> category </label>
              <input type="text" name="category" title="category" onChange={onChangeHandler}/>
            </div>

            <div>
              <label> Price </label>
              <input type="number" name="price" title="price" onChange={onChangeHandler}/>
            </div>

            <div>
              <label> Description </label>
              <input type="text" name="description" title="description" onChange={onChangeHandler}/>
            </div>

            <div>
              <label> Image </label>
              <img id="images" alt="uploaded image" height="100" width="100"/>
              <input type="file" name="image" title="image" accept="image/*" onChange={onChangeHandler}/>
            </div>
          </form>
        </Modal>
        <span className="profileImage">
          { user }
        </span>
      </div>
    </header>
  )
};

export default Header;
