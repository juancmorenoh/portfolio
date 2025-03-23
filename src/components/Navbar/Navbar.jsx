import React,{useState} from "react";
import styles from "./Navbar.module.css";
import openMenu from'/assets/nav/menuIcon.png';
import closeMenu from '/assets/nav/closeIcon.png';

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  
  return(
    <nav className={styles.navbar}>
      <a className={styles.title} href="/"><span className={styles.c}>Camilo</span><span className={styles.m}>Moreno</span></a>
      <div className={styles.menu}>
        {/* /assets/ can't be add to getImageUlr function NSW */}
        <img className={styles.menuBtn} src={menuOpen
        ? closeMenu
        : openMenu}
        alt="menu-button"
        onClick={()=> setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;