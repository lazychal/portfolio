import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTitle}>
                    Владимир Шадринцев
                </div>
                <div className={styles.socialNets}>
                    <div className={styles.firstSpan}></div>
                    <div className={styles.secondDiv}></div>
                    <div className={styles.firstSpan}></div>
                    <div className={styles.secondDiv}></div>
                    <div className={styles.firstSpan}></div>
                    <div className={styles.secondDiv}></div>
                    <div className={styles.firstSpan}></div>
                </div>
                <div className={styles.copyright}>
                    &#169; 2020 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
