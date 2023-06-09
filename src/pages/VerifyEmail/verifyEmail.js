import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ResendEmailAction, VerifyEmailAction } from '../../redux/verifyEmail/actions';
import { Button, Modal } from 'antd';
import './verifyEmail.scss';

const VerifyEmail = () => {

  const initialState = {
    email: '',
    code: ''
  };

  const resendInitialState = {
    email: ''
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [verification, setVerification] = useState(initialState);
  const [resendOtp, setResendOtp] = useState(resendInitialState);
  const [selectedValue, setSelectedValue] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeHandler = (e) => {

    setSelectedValue(e.target.value);

    const { name, value } = e.target;

    setVerification({...verification, [name]: value})
    console.log('set state',verification);
  };


  const onFinish = () => {
    dispatch(VerifyEmailAction(verification))
    navigate('/')
    console.log('Success:', verification);
  };

  const handleResendCode = (e) => {
    setSelectedValue(e.target.value);

    const { name, value } = e.target;

    setResendOtp({...resendOtp, [name]: value});
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(ResendEmailAction(resendOtp))
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="verify-form-wrapper">
      <form>
        <div className="form-fields">
          <label> Email </label>
          <input type="text" name="email" title="email" onChange={onChangeHandler}/>
        </div>

        <div className="form-fields">
          <label> Code </label>
          <input type="number" name="code" title="code" onChange={onChangeHandler}/>
        </div>

        <div className="verify-buttons">
          <Button variant="success" onClick={() => onFinish()}>
            Verify
          </Button>

          <Button variant="success" onClick={showModal}>
            Resend Otp
          </Button>
        </div>
      </form>

      <Modal title="Add Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form>
          <div className="form-fields">
            <label> Email </label>
            <input type="text" name="email" title="email" onChange={handleResendCode}/>
          </div>
        </form>
      </Modal>

    </div>
  )
};

export default VerifyEmail;
