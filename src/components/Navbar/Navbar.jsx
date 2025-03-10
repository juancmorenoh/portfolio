import React,{useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";


function Navbar(){
  
  return(
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Homepage</a>
      <div className={styles.menu}>
        {/* /assets/ can't be att to getImageUlr function NSW */}
        <img className={styles.menuBtn} src={getImageUrl('/assets/nav/menuIcon.png')}alt="menu-button" />
        <ul className={styles.menuItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;