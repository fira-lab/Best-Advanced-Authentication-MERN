import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { MdPassword } from "react-icons/md";

import styles from "./auth.module.scss";
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const Reset  = () => {

  const initialState = {
  
    password: "",
    password2: "",
  };

  const [formData, setFormData] = useState(initialState);
  const {  password, password2 } = formData;

  const handleInputChange = () => {};
  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
          <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>
          

          <br />
        
          <form>
          <PasswordInput
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />

            <PasswordInput
              type="password"
              placeholder="Confirm Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
           
            {/*<input 
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
              />*/}
              <button type="submit"
              className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
                <div className={styles.links}>
           
            <p>
                <Link to="/">- Home</Link>
            </p>
            <p>
                <Link to="/login">- Login</Link>
            </p>
              </div>
          </form>
          
        </div>
      </Card>
    </div>
  );
};

export default Reset;
