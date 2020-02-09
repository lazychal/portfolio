import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.projectsTitle}>
              Мои работы
            </div>
            <div className={styles.projectsItems}>
                <div className={styles.elementProjects}>
                    <div className={styles.elementProjectsImg}></div>
                    <ul>
                        <li>Название проекта</li>
                        <li>Описание проекта</li>
                    </ul>
                </div>
                <div className={styles.elementProjects}>
                    <div className={styles.elementProjectsImg}></div>
                    <ul>
                        <li>Название проекта</li>
                        <li>Описание проекта</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
