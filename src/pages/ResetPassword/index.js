import React, {useState} from 'react';
import { Button, Card } from 'antd';

const ResetPassword = () => {

  const initialValues = {
    email : "",
    code : "",
    newpassword: "",
    confirmpassword: ""
  };

  const [resetValues, setResetValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setResetValues({...resetValues, [name]: value});
  };

  return (
    <div>
      <Card className="card-wrapper">
        <form className="form-wrapper">
          <div>
            <label> Email </label>
            <input type="email" name="email" title="email" onChange={onChangeHandler} required={true}/>
          </div>

          <div>
            <label> Code </label>
            <input type="number" name="code" title="code" onChange={onChangeHandler} required={true}/>
          </div>

          <div>
            <label> Password </label>
            <input type="password" name="newpassword" title="New password" onChange={onChangeHandler} required={true}/>
          </div>

          <div>
            <label> Password </label>
            <input type="password" name="confirmpassword" title="Confirm password" onChange={onChangeHandler} required={true}/>
          </div>

          <div className="login-button">
            <Button
              variant="success"
              //onClick={() => onFinish()}
            >
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
};

export default ResetPassword;
