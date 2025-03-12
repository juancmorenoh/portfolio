import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>{
        projects.map((project,index) => {
          if (project.title === "Thriathlon Tracker") {
            return null;
          }
          return (
            <ProjectCard key={index} project={project}/> /*arguments*/
          )
        })
      }</div>
    </section>
  )
}

export default Projects
