import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("/assets/about/browsing.png")} alt="boy on laptop" className={styles.aboutMainImg}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/website.png")} alt="website" className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>FrontEnd</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/server.png")} alt="server" className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>BackEnd</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/education.png")} alt="university hat" className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Graduate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default About
