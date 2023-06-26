import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockOutlined from '@ant-design/icons/lib/icons/LockOutlined';
import { Button, Modal } from 'antd';
import { ResendEmailAction, VerifyEmailAction } from '../../redux/verifyEmail/actions';
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

  const inputs = document.querySelectorAll(".otp-field input");

  inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
  });

  function handleOtp(e) {

    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
      input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
      input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1 && isValidInput) {
      submit();
    }
  }

  function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
      inputs.forEach((input, index) => (input.value = value[index]));
      submit();
    }
  }

  function submit() {
    console.log("Submitting...");
    // 👇 Entered OTP
    let otp = "";
    inputs.forEach((input) => {
      otp += input.value;
      input.disabled = true;
      input.classList.add("disabled");
    });
    console.log(otp);
    // 👉 Call API below
  }

  return (
    <div className="verify-form-wrapper">
      <div className="verify-otp-header">
        <LockOutlined />
        <div>
          Verify OTP
        </div>
      </div>
      <form>
        <div className="form-fields">
          <label> Email </label>
          <input type="text" name="email" title="email" onChange={onChangeHandler} />
        </div>

        <div className="form-fields otp-field">
          <input type="text" maxLength="1" onChange={onChangeHandler}/>
          <input type="text" maxLength="1" onChange={onChangeHandler}/>
          <input className="space" type="text" maxLength="1" onChange={onChangeHandler}/>
          <input type="text" maxLength="1" onChange={onChangeHandler}/>
          <input type="text" maxLength="1" onChange={onChangeHandler}/>
          <input type="text" maxLength="1" onChange={onChangeHandler}/>
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
