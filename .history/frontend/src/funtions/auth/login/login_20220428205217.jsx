import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {  } from "react-redux";
import { Link,  } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../assets/images/logocam.png";
import "./login.css"

function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="page">
      <ToastContainer />
      <div className="backgroundBlur"></div>
      <div className="container">
        <section className="fullnavbar">
          <nav className="navbar navbar-expand-sm">
            <Link className="navbar-brand" to="/">
              <img className="logoWeb" src={logo} alt="logo" />
            </Link>
          </nav>
        </section>
        <section className="loginContent">
          <div className="fullLogin">
            <div className="loginContent--form">
              <h1 data-uia="login-page-title">Đăng nhập</h1>
              <ValidatorForm className="login--form__email"
              >
                <TextValidator
                  className="login--form__input"
                  id="id_userLoginId"
                  defaultValue
                  placeholder="Nhập email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="email"
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "Hãy điền trường này!!!",
                    "email không hợp lệ",
                  ]}
                  autoComplete="on"
                />
                <div className="passwordFull">
                  <TextValidator
                    className="login--form__input"
                    id="id_password"
                    defaultValue
                    placeholder="Nhập password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    validators={["required"]}
                    errorMessages={["Hãy điền trường này!!!"]}
                    autoComplete="on"
                  ></TextValidator>
                  <IconButton
                    className="showPassword"
                    aria-label="toggle password visibility"
                  >
                  </IconButton>
                </div>

                <div className="login--form__button">
                  <Button
                    className="signinHome"
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Đăng nhập
                  </Button>
                </div>
              </ValidatorForm>
            </div>
            <div className="loginContent--other">
              <div className="login-signup-now" data-uia="login-signup-now">
                Bạn mới tham gia ?
                <Link to="/">
                  <a className=" " target="_self">
                    {" "}
                    Đăng ký ngay
                  </a>
                  .
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogIn;
