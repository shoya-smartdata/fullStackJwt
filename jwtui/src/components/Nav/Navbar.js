import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import LoginModal from "../../pages/Login/LoginModel";
import SignupModal from "../../pages/Register/Signup"; // Import the SignupModal

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleShowLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);
  const handleShowSignup = () => {
    setShowLoginModal(false); // Close the login modal
    setShowSignupModal(true); // Show the signup modal
  };
  const handleCloseSignup = () => setShowSignupModal(false);

  return (
    <>
      <nav className={styles.navbar}>
        <span>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </span>
        <ul className={styles.navLinks}>
          <li><Link to="/">MEN</Link></li>
          <li><Link to="/women">WOMEN</Link></li>
          <li><Link to="/kids">KIDS</Link></li>
          <li><Link to="/home-living">HOME & LIVING</Link></li>
          <li><Link to="/beauty">BEAUTY</Link></li>
          <li><Link to="/studio">STUDIO<sup>NEW</sup></Link></li>
        </ul>
        <div className={styles.searchBox}>
          <CiSearch />
          <input type="text" placeholder="Search for products, Brands and more.." />
        </div>
        <div className={styles.iconBox}>
          <span>
            <CiUser onClick={handleShowLogin} style={{ cursor: 'pointer' }} />
            <strong>Profile</strong>
          </span>
          <span>
            <CiHeart />
            <strong>Wishlist</strong>
          </span>
          <span>
            <HiOutlineShoppingBag />
            <strong>Bag</strong>
          </span>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal show={showLoginModal} handleClose={handleCloseLogin} handleShowSignup={handleShowSignup} />
      <SignupModal show={showSignupModal} handleClose={handleCloseSignup} />
    </>
  );
}

export default Navbar;
