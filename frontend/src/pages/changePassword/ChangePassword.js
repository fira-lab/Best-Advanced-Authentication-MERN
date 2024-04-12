import React, { useState } from 'react'
import Card from '../../components/card/Card';
import PageMenu from '../../components/pageMenu/PageMenu';
import PasswordInput from '../../components/passwordInput/PasswordInput';

 const initialState ={
    oldPassword: "",
    password: "",
    password2: ""

 };
const ChangePassword = () => {
    const [formData, setformData] = useState(initialState);
    const handleInputChange = () =>{}
    const {oldPassword, password, password2} = formData
  return (
    <>
    <section>
    <div className='container'>
        <PageMenu/>
            <h2>Change Password</h2>
            <div className='--flex-start change-password'>
            <Card cardClass={"card"}>
      <form>
        <p>
          <label>Current Password</label>
          <PasswordInput
            type="password"
            placeholder="Old Password"
            required
            name="password"
            value={oldPassword}
            onChange={handleInputChange}
            />
        </p>
        <p>
          <label>New Password:</label>
          <PasswordInput
            type="password"
            placeholder="Old Password"
            required
            name="password"
            value={password}
            onChange={handleInputChange}
            />
        </p>
        <p><label>Confirm New Password</label>
        <PasswordInput
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password2}
            onChange={handleInputChange}
            />
        </p>
        <button className='--btn --btn-danger --btn-block'>
            Change Password
        </button>
      </form>
      </Card>
      </div>
      
    </div>
    </section>
    </>
  )
}

export default ChangePassword;
