import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Assuming you're using CSS Modules
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";


function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <span>
   
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </span>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">MEN</Link>
          </li>
          <li>
            <Link to="/women">WOMEN</Link>
          </li>
          <li>
            <Link to="/kids">KIDS</Link>
          </li>
          <li>
            <Link to="/home-living">HOME & LIVING</Link>
          </li>
          <li>
            <Link to="/beauty">BEAUTY</Link>
          </li>
          <li>
            <Link to="/studio">STUDIO<sup>NEW</sup></Link>
          </li>
        </ul>
        <div className={styles.searchBox}> <CiSearch />
          <input type="text"  placeholder="Search for products, Brands and more.." />
        </div>
        <div className={styles.iconBox}>
          <span><CiUser />
          <strong>Profile</strong></span>
          <span><CiHeart /> 
          <strong>Wishlist</strong></span>
          <span><HiOutlineShoppingBag/>
          <strong>Bag</strong></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
