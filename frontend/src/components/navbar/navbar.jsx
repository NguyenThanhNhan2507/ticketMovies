
import IconButton from "@material-ui/core/IconButton";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React from "react";




function NavBar(props) {
  return (
    <div className="fullnavbar">
      <nav className="">
        <ul className="">
          <li className="">
            <a className="">
              Phim
            </a>
          </li>
          <li className="">
            <a className="">
              Phim đang chiếu
            </a>
          </li>
          <li className="">
            <a className="" >
              Tin tức
            </a>
          </li>
          <li className="">
            <a className="" >
              Ứng dụng
            </a>
          </li>
          <li className="">
            <a className="">
              Liên hệ
            </a>
          </li>
        </ul>
        <div className="">
          <IconButton>
            <PersonOutlineIcon className=""/>
          </IconButton>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
