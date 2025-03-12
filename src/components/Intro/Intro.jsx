import React from 'react'
import styles from "./Intro.module.css";
import boy from "/assets/intro/boy.png";

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Camilo</h1>
        <p className={styles.description}>I graduated in Computer Science and am excited to start my career in the tech industry. Throughout my studies, I developed a strong foundation in software development, web technologies, and problem-solving. I have hands-on experience working with Python, Django, JavaScript, and React, building projects that showcase my skills in full-stack development.</p>
        <a className={styles.contactBtn} href="mailto:camilo.mro@gmail.com">Contact Me</a>
      </div>
      <img className={styles.boyImg} src={boy} alt="boy on laptop" />
    </section>
  )
}

export default Intro
