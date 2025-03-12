import React from 'react';
import jobs from '../../data/jobs.json';
import styles from './Experience.module.css';
import ses from "/assets/jobs/ses.png";

function Experience() {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.jobs}>
          {jobs.map((job, index) => {
            return(
              <div key={index} className={styles.job}>
                <img src={ses} alt={job.company}/>
                <div className={styles.jobItemText}>
                  <h3>{job.role} <i>at</i> {job.company}</h3>
                  <ul>
                    {job.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                  
                </div>  
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
