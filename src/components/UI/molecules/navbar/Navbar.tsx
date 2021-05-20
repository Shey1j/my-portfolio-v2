import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { NavbarItems } from "../../../types";
import "./Navbar.css";

interface NavProps {
  NavItems: Array<NavbarItems>;
}

const NavBar: React.FC<NavProps> = ({ NavItems }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        (document.querySelector(".navbar") as HTMLDivElement).className =
          "navbar navbar-expand-lg sheyi-nav position-fixed w-100 scroll";
      } else {
        (document.querySelector(".navbar") as HTMLDivElement).className =
          "navbar navbar-expand-lg sheyi-nav position-fixed w-100";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg position-fixed w-100 sheyi-nav">
      <div className="container">
        <a className="sheyi-logo mr-lg-4" href="/">
          S<span>heyi</span>
        </a>
        <div
          className="navbar-toggler border-0"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleClick}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div
          className={
            open
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            {NavItems.map((item) => (
              <li className="nav-item mx-lg-4" key={item.linkText}>
                <Link className="nav-link" to={item.path}>
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
