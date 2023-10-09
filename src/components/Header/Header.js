import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import mlogo from "../../images/mlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";

const menuItems = [
  {
    title: "About",
    id: "about",
    cName: "nav-links"
  },
  {
    title: "Projects",
    id: "projects",
    cName: "nav-links"
  },
  {
    title: "Experience",
    id: "experience",
    cName: "nav-links"
  }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const handelClick = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-toggle" onClick={handelClick}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
        <img src={mlogo} alt="logo" className="logo" onClick={scrollToTop} />
        <ul className={open ? "main-nav active" : "main-nav"}>
          {menuItems.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={item.cName}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
