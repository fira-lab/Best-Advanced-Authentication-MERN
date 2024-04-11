import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { FiLogIn } from "react-icons/fi";
import styles from "./auth.module.scss";
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <FiLogIn size={35} color="#999" />
          </div>
          <h2>Login hil</h2>
          <div className="--flex-center">
          <button className="--btn --btn-google">
            sign in with Google
          </button>
          </div>

          <br />
          <p className="--text-center --fw-bold">or</p>

          <form>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <PasswordInput
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
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
                Login
              </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp; </p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;