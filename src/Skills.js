import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.skillsTitle}>Мои скиллы</div>
            <div className={styles.skillsList}>
                <div className={styles.skill_1}>
                  <p>HTML&CSS</p>
                  <div className={styles.img_1}></div>
                </div>
                <div className={styles.skill_2}>
                  <p>JavaScript</p>
                  <div className={styles.img_1}></div>
                </div>
                <div className={styles.skill_3}>
                  <p>React JS</p>
                  <div className={styles.img_1}></div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
