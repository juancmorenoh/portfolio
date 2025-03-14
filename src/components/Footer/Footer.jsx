import React from 'react';
import styles from "./Footer.module.css";
import gmail from "/assets/footer/gmail.png";
import linkedin from "/assets/footer/linkedin.png";

const Footer = () => {
  return (
    <footer id='footer' className={styles.container}>
      <div className={styles.linkContainer}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={gmail} alt="gmail icon" />
            <a href="mailto:camilo.mro@gmail.com">camilo.mro@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={linkedin} alt="linkedIn icon" />
            <a href="https://www.linkedin.com/in/juancmorenoh/" target="_blank">linkedin.com/juancmorenoh</a>
          </li>
        </ul>
      </div>
      {/* References */}
      <div className={styles.references}>
        <a href="https://www.flaticon.com/free-icons/miscellaneous" title="miscellaneous icons" target="_blank">Miscellaneous icons created by Mayor Icons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/young" title="young icons" target="_blank">Young icons created by Freepik - Flaticon</a>
      </div>  
    </footer>
  )
}

export default Footer
