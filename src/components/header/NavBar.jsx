import React, { useEffect, useState } from "react";
import AppLogo from "../../assets/applogo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../../pages/registration/FirebaseConfig";
import { toast } from "react-hot-toast";

const NavBar = ({ username }) => {
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position to hide/show navbar
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Update scroll position on scroll event
  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Handle user logout
  const handleLogout = () => {
    toast.success("Logout Successful");
    setTimeout(() => {
      signOut(auth);
      navigate("/login");
    }, 1000);
  };

  return (
    <nav
      className={`w-full fixed top-0 h-16 flex justify-between items-center  bg-[#EFE3D3]/40 backdrop-blur duration-500  z-20 right-0 left-0 ${
        scrollPosition > 200 && !open ? "translate-y-[-66px]" : "translate-y-0"
      }`}
    >
      <div
        className={` mx-auto max-w-[1152px] w-[100%]  top-0 h-16 flex justify-between items-center px-4 `}
      >
        {/* Logo and Brand Name */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer  flex flex-col items-center w-[126px] drop-shadow-[0_1px_3px_#FF9F39]"
        >
          <img
            src={AppLogo}
            alt="logo"
            className="w-[62px] h-[36px] relative top-1 "
          />
          <p className="font-bold font-sans text-lg relative bottom-1">
            RECIPE ROOST
          </p>
        </div>

        {/* Navigation Links for Desktop */}
        <div className={`hidden md:flex `}>
          <p
            className={`relative mx-4  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FF9B39]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          >
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="relative mx-4 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FF9B39]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <NavLink to="contact">Contect</NavLink>
          </p>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`border-t-[1px] border-[#EDC295] duration-300 flex absolute right-0 left-0 justify-evenly items-center  w-full h-[200px]  bg-[#EFE3D3] flex-col   ${
            open ? " top-[64px]  opacity-1" : " top-[-200px] opacity-0"
          }`}
        >
          <p className="relative mx-4  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FF9B39]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="relative mx-4 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FF9B39]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <NavLink to="contact">Contect</NavLink>
          </p>
        </div>

        {/* User Info and Authentication Buttons */}
        <div className="flex items-center justify-end  md:w-[160px] ">
          <p className="p-2   hidden sm-mob:block">
            {username ? username : ""}
          </p>
          {username ? (
            <button
              onClick={handleLogout}
              className="h-8 w-20 hover:scale-105 transition-transform duration-300   rounded-full  bg-gradient-to-r from-[#FFB93A] to-[#FF9B39] shadow-lg"
            >
              Logout
            </button>
          ) : (
            <button className="h-8 w-20 hover:scale-105 transition-transform duration-300   rounded-full  bg-gradient-to-r from-[#FFB93A] to-[#FF9B39] shadow-lg">
              Login
            </button>
          )}
          <div className="md:hidden pl-4 cursor-pointer">
            {open ? (
              <IoClose className="size-7" onClick={() => setOpen(!open)} />
            ) : (
              <GiHamburgerMenu
                className="size-7"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
