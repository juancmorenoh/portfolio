import React from 'react'
import styles from './ProjectCard.module.css';

function ProjectCard({project}) {
  /*
  project = props.project 
  */
  return (
    <div className={styles.container}>
      <img src={`/portfolio/assets/${project.imageSrc}`} alt={`image-${project.title}`} className={styles.image}/>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tools}>
        {
          project.tools.map((tool,index) =>{
            return(
              <li className={styles.tool} key={index}>{tool}</li>
            );
          })
        }
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={project.demo} target="_blank">Demo</a>
        <a className={styles.link} href={project.source} target="_blank">Source</a>
      </div>
    </div>
  )
}

export default ProjectCard
