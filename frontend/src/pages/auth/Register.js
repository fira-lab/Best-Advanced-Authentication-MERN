import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { FiLogIn } from "react-icons/fi";
import styles from "./auth.module.scss";
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/passwordInput/PasswordInput';
import { TiUserAddOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timeIcon = <FaTimes color='red' size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const SwitchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timeIcon;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  useEffect(() => {
    // Check for Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }
  }, [password]);

  useEffect(() => {
    // Check for Numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }
  }, [password]);

  useEffect(() => {
    // Check for Special Characters
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setChar(true);
    } else {
      setChar(false);
    }
  }, [password]);

  useEffect(() => {
    // Check for Password Length
    if (password.length > 8) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <br />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />
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

            <PasswordInput
              type="password"
              placeholder="Confirm Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />

            {/* Password strength */}
            <Card cardClass={styles.group}>
              <ul className='form-list'>
                <li>
                  <span className={styles.indicator}>
                    {SwitchIcon(uCase)}
                    &nbsp;Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {SwitchIcon(num)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {SwitchIcon(sChar)}
                    &nbsp; Special Character (!@#$^&*)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {SwitchIcon(passLength)}
                    &nbsp; At least 6 Characters
                  </span>
                </li>
              </ul>
            </Card>

            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p>&nbsp;Already have an account? &nbsp;</p>
            <Link to="/login" element={<Register />}>
              Login
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;