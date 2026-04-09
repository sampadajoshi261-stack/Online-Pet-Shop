import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import UserInfo from "./UserInfo.jsx";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navLogo">
        <img
          src="https://www.shutterstock.com/image-vector/pet-care-logo-design-vector-260nw-2484974689.jpg"
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <div className="navMenu">
        <NavLink to={"/"} className="navLinks">
          Home
        </NavLink>
        <NavLink to={"/about-us"} className="navLinks">
          About Us
        </NavLink>
        <NavLink to={"/contact-us"} className="navLinks">
          Contact Us
        </NavLink>
        <NavLink to={"/login"} className="navLinks">
          Login
        </NavLink>
        <NavLink to={"/sign-up"} className="navLinks">
          Sign Up
        </NavLink>
        <NavLink to={"/Admin-Dashboard"} className="navLinks">
          Admin
        </NavLink>
        <NavLink to={"/pets"} className="navLinks">
          Pets
        </NavLink>
      </div>
      <UserInfo></UserInfo>
      <Outlet />
    </div>
  );
}

export default Navbar;
