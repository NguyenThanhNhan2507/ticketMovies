import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { Link,  } from "react-router-dom";
import {  toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../assets/images/logocam.png";
import "./login.css"
import { useHistory } from "react-router";
import firebase from "../../../callBack/firebase";
import { getUser } from "./loginCall";
import Loading from "../../../components/loading/loading";


function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();


  const getEmail = (event) =>{
    setEmail(event.target.value)
  }
  const getPassword = (event) =>{
    setPassword(event.target.value)
  }
  const getShowPassword = (event) =>{
    setShowPassword(!showPassword)
  }
  const getDownLoadPassword = (event) =>{
    event.preventDefault()
  }
  const getLogin = () =>{
    setLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response)=>{
        const {user} = response
        const data = {
          userId: user.uid,
          email: user.email,
          accessToken: user.za,
        }
        localStorage.setItem("user", JSON.stringify(data))
        const userStore = localStorage.getItem("user")
        const logInUser = userStore !== null ? JSON.parse(userStore) : null
        const action = getUser(logInUser)
        dispatch(action)
        history.push("/")
        setLoading(true)
      })
      .catch((err) =>{
        toast.error(err.message)
        setLoading(false)
      })
  }
  return (
    <div className="page">
      <ToastContainer />
      {loading ? <Loading onLoad={loading}/> :<></>}
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
              <h1 data-uia="login-page-title">????ng nh???p</h1>
              <ValidatorForm 
              className="login--form__email"
              onSubmit={getLogin}
              onError={(errors) => {
                  for (const err of errors) {
                    console.log(err.props.errorMessages[0]);
                  }
                }}
              >
                <TextValidator
                   className="login--form__input"
                  id="id_userLoginId"
                  defaultValue
                  placeholder="Nh???p email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={getEmail}
                  name="email"
                  value={email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "H??y ??i???n tr?????ng n??y!!!",
                    "email kh??ng h???p l???",
                  ]}
                  autoComplete="on"
                />
                <div className="passwordFull">
                  <TextValidator
              className="login--form__input"
                    id="id_password"
                    defaultValue
                    placeholder="Nh???p password"
                    variant="outlined"
                    fullWidth
                    onChange={getPassword}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    validators={["required"]}
                    errorMessages={["H??y ??i???n tr?????ng n??y!!!"]}
                    autoComplete="on"
                  ></TextValidator>
                  <IconButton
                    className="showPassword"
                    aria-label="toggle password visibility"
                    onClick={getShowPassword}
                    onMouseDown={handleMouseDownPassword}
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
                    ????ng nh???p
                  </Button>
                </div>
              </ValidatorForm>
            </div>
            <div className="loginContent--other">
              <div className="login-signup-now" data-uia="login-signup-now">
                B???n m???i tham gia ?
                <Link to="/">
                  <a className=" " target="_self">
                    {" "}
                    ????ng k?? ngay
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
