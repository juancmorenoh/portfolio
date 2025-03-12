import React from 'react';
import tools from '../../data/tools.json';
import styles from "./Tools.module.css";


function Tools() {
  return (
    <section className={styles.container} id='tools'>
      <h2 className={styles.title}>Tools</h2>
      <div className={styles.content}>
        <div className={styles.tools}>
          {tools.map((tool, index) => {
            return(
              <div key={index} className={styles.tool}>
                <div className={styles.imageContainer}>
                  <img src= {`/portfolio/assets/${tool.imageSrc}`} alt={tool.title} />
                </div>
                <p>{tool.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Tools
