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

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'User registered successfully',
    })
  };

  const onFinish = (values) => {

    if(!(user.name && user.email && user.username && user.password)) {
      console.log('sign up failed')
    } else {
      dispatch(FetchUser(user));
      navigate('/verify');
      success()
    }
    //console.log('Success:', user);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {contextHolder}
      <div className="signUp-page-main">
        <div className="signUp-image-wrapper">
        </div>
        <div className="signUp-form-main">
          <Card className="card-wrapper">
            <form className="form-wrapper">
              <div>
                <label> name </label>
                <input type="text" name="name" title="name" onChange={onChangeHandler}/>
              </div>

              <div>
                <label> email </label>
                <input type="text" name="email" title="email" onChange={onChangeHandler}/>
              </div>

              <div>
                <label> Username </label>
                <input type="text" name="username" title="username" onChange={onChangeHandler}/>
              </div>

              <div>
                <label> Password </label>
                <input type="password" name="password" title="password" onChange={onChangeHandler}/>
              </div>

              <div className="signUp-button">
                <Button
                  variant="success"
                  onClick={() => onFinish()}
                >
                  Sign Up
                </Button>
              </div>
            </form>

          </Card>
        </div>
      </div>
    </>
  )
};

export default SignUp;
