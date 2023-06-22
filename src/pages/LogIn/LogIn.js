import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, message, Card, Space } from 'antd';
import { LoginRequest } from '../../redux/login/actions';
import './login.scss';
import {ValidationError} from "../../components/errors/errors";
import { ResetPasswordRequest } from '../../redux/resetPassword/actions';

const LogIn = () => {

  const initialValues = {
    email : "",
    password : ""
  };

  const initValue = {
    email: ""
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialValues);
  const [selectedValue, setSelectedValue] = useState();
  const login = useSelector(state => state.logIn.login);
  const [messageApi, contextHolder] = message.useMessage();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [resetMail, setResetMail] = useState(initValue);

  console.log('login', login?.data?.accessToken?.accessToken);

  const onChangeHandler = (e) => {

    setSelectedValue(e.target.value);

    const { name, value } = e.target;

    setUser({...user, [name]: value});
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Email doesn\'t match with records',
    });
  };

  const onFinish = () => {
    console.log('user email', login?.user?.email);

    //const userData = login

  /*  if(!(user.email || user.password)) {
      console.log('test')
    }*/
/*    else if(user.email !== login?.data?.user?.email) {
      return error()
      //console.log('Email doesn\'t match with records');
      //navigate('/home');
    }*/
    //else {
      dispatch(LoginRequest(user))
      navigate('/home');
    //}
  };

  const onClickForgotPassword = () => {
    setIsButtonClicked(!isButtonClicked);
    console.log('clicked', isButtonClicked);
  };

  const onClickResetLink = () => {
    dispatch(ResetPasswordRequest(resetMail));
    navigate('/ResetPassword')
  };

  return (
    <>
      {contextHolder}
      <div className="login-main">
        <div className="login-wrapper">
          { isButtonClicked === false ?
          <Card className="card-wrapper">
            <form className="form-wrapper">
              <div>
                <label> Email </label>
                <input type="email" name="email" title="email" onChange={onChangeHandler} required={true}/>
              </div>

              <div>
                <label> Password </label>
                <input type="password" name="password" title="password" onChange={onChangeHandler} required={true}/>
              </div>

              <div className="login-button">
                <Button
                    variant="success"
                    onClick={() => onFinish()}
                >
                  Log In
                </Button>
              </div>

              <div>
                <Button onClick={onClickForgotPassword}>Forgot password</Button>
              </div>

            </form>
          </Card>
              :
            <Card className="card-wrapper">
              <form className="form-wrapper">
                <div>
                  <label> Email </label>
                  <input
                    type="email"
                    name="email"
                    title="email"
                    onChange={(e) => setResetMail({email: e.target.value})}
                    required={true}
                  />
                </div>

                <div className="login-button">
                  <Button
                    variant="success"
                    onClick={() => onClickResetLink()}
                  >
                    Reset Link
                  </Button>
                </div>
              </form>
            </Card>
          }
        </div>
      </div>
    </>
  )
};

export default LogIn;
