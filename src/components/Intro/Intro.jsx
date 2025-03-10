import React from 'react'
import styles from "./Intro.module.css";
import { getImageUrl } from '../../utils'

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Camilo</h1>
        <p className={styles.description}>Lorem ipsum odor amet, consectetuer adipiscing elit. Nec est in nascetur aenean ornare morbi faucibus. Semper pretium cubilia luctus senectus mus maecenas finibus.</p>
        <a className={styles.contactBtn} href="mailto:camilo.mro@gmail.com">Contact Me</a>
      </div>
      <img className={styles.boyImg} src={getImageUrl("/assets/intro/boy.png")} alt="boy on laptop" />
    </section>
  )
}

export default Intro
