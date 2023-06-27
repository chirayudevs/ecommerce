import React, { useState } from 'react';
import { Button, Checkbox, Card, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FetchProducts } from '../../redux/products/actions';
import './signUp.scss';
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../../redux/signUp/actions";
import homePage from "../../assets/images/homePage.jpeg";

const SignUp = () => {

  const initialValues = {
    name : "",
    email : "",
    username : "",
    password : ""
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialValues);
  const [selectedValue, setSelectedValue] = useState();
  const userData = useSelector(state => state.signUp.data);
  const [messageApi, contextHolder] = message.useMessage();
  console.log('userData', userData);

  console.log('user',user)
  const onChangeHandler = (e) => {

    setSelectedValue(e.target.value);

    const { name, value } = e.target;

    setUser({...user, [name]: value})
    console.log('set state',user);
  };


  const onFinish = (values) => {

    if(!(user.name && user.email && user.username && user.password)) {
      console.log('sign up failed')
    } else {
      dispatch(FetchUser(user));
      navigate('/verify');
    }
    //console.log('Success:', user);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="sign-up-form-wrapper">
      {contextHolder}
      <div className="signUp-page-main">
        <div className="signUp-image-wrapper">
        </div>
        <div className="signUp-form-main">
          <div className="container">
            <form>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" name="name" title="name" onChange={onChangeHandler} required />
                  <div className="underline" />
                  <label htmlFor="">Name</label>
                </div>
                <div className="input-data">
                  <input type="text" name="email" title="email" onChange={onChangeHandler} required />
                  <div className="underline" />
                  <label htmlFor="">Email</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" name="username" title="username" onChange={onChangeHandler} required />
                  <div className="underline" />
                  <label htmlFor="">Username</label>
                </div>
                <div className="input-data">
                  <input type="password" name="password" title="password" onChange={onChangeHandler} required />
                  <div className="underline" />
                  <label htmlFor="">Password</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data textarea">
                  <br/>
                  <div className="form-row submit-btn">
                    <div className="input-data">
                      <div className="inner" />
                      <input type="submit" value="submit" onClick={() => onFinish()} />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignUp;
