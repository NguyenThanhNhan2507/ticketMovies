/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import $ from "jquery";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logocam.png";
import "./navBar.css";



function NavBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setTimeout(() => {
      localStorage.removeItem("user");
      props.setUser();
      setAnchorE2(null);
      history.push("/");
    }, 1000);
  };
  const handleHistory = () => {
    history.push({ pathname: "/lich-su-dat-ve" });
    $(window).scrollTop(0);
  };
  const handleClickPhim = () => {
    if ($(".renderMovies").offset()) {
      $("html,body").animate(
        {
          scrollTop: $(".renderMovies").offset().top,
        },
        1000
      );
    } else {
      history.push("/");
      setTimeout(() => {
        $("html,body").animate(
          {
            scrollTop: $(".renderMovies").offset().top,
          },
          1000
        );
      }, 1500);
    }
  };
  const handleClickPhimDangChieu = () => {
    if ($(".pageViewer").offset()) {
      $("html,body").animate(
        {
          scrollTop: $(".pageViewer").offset().top,
        },
        1000
      );
    } else {
      history.push("/");
      setTimeout(() => {
        $("html,body").animate(
          {
            scrollTop: $(".pageViewer").offset().top,
          },
          1000
        );
      }, 1500);
    }
  };
  const handleClickTinTuc = () => {
    if ($(".morePage").offset()) {
      $("html,body").animate(
        {
          scrollTop: $(".morePage").offset().top,
        },
        1000
      );
    } else {
      history.push("/");
      setTimeout(() => {
        $("html,body").animate(
          {
            scrollTop: $(".morePage").offset().top,
          },
          1000
        );
      }, 1500);
    }
  };
  const handleClickApp = () => {
    if ($(".appView").offset()) {
      $("html,body").animate(
        {
          scrollTop: $(".appView").offset().top,
        },
        1000
      );
    } else {
      history.push("/");
      setTimeout(() => {
        $("html,body").animate(
          {
            scrollTop: $(".appView").offset().top,
          },
          1000
        );
      }, 1500);
    }
  };
  const handleClickLienHe = () => {
    if ($(".footer").offset()) {
      $("html,body").animate(
        {
          scrollTop: $(".footer").offset().top,
        },
        1000
      );
    } else {
      history.push("/");
      setTimeout(() => {
        $("html,body").animate(
          {
            scrollTop: $(".footer").offset().top,
          },
          1000
        );
      }, 1500);
    }
  };
  return (
    <div className="fullnavbar">
      <nav className="navbar navbarHome navbar-expand-sm navbar-dark">
        <Link className="navbar-brand" to="/">
          <img className="logoWeb" src={logo} alt="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link_phim" onClick={handleClickPhim}>
              Phim
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-link_phimdangchieu"
              onClick={handleClickPhimDangChieu}
            >
              Phim đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link_tintuc" onClick={handleClickTinTuc}>
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link_app" onClick={handleClickApp}>
              Ứng dụng
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link_lienhe" onClick={handleClickLienHe}>
              Liên hệ
            </a>
          </li>
        </ul>
        <div className="account">
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <PersonOutlineIcon className="buttonAccount" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
           
            <MenuItem onClick={handleHistory}>Lịch sử đặt vé</MenuItem>
           <Link to="/login">
           <MenuItem onClick={handleLogOut} style={{ color: "red" }}>
              Log Out
            </MenuItem>
           </Link>
          </Menu>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
