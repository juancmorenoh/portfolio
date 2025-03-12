import React from 'react';
import styles from "./About.module.css";

import website from "/assets/about/website.png";
import server from "/assets/about/server.png";
import education from "/assets/about/education.png";
import browsing from "/assets/about/browsing.png";

function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={browsing} alt="boy on laptop" className={styles.aboutMainImg}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={website} alt="website" className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>FrontEnd</h3>
              <p>I have a solid foundation in front-end development, with experience working with HTML, CSS, and JavaScript. I have built responsive, user-friendly interfaces and I am passionate about creating seamless and interactive web experiences. I am eager to apply my front-end skills to new projects and continue learning in the field. </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="server" className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>BackEnd</h3>
              <p>Along with my front-end skills, I have also gained experience in back-end development. I have worked with Python and Django to build server-side applications and APIs. I am familiar with setting up databases, handling server requests, and ensuring smooth communication between the front-end and back-end. </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={education} alt="university hat" className={styles.aboutIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Graduate</h3>
              <p>I earned a Bachelor's degree in Computer Science, where I gained a solid understanding of key concepts like data structures and algorithms. My course included modules in PHP, SQL, R and Java, which helped me develop a well-rounded skill set in both front-end and back-end technologies.</p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default About
