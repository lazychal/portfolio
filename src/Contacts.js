import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
          <div className={styles.container}>
            <div className={styles.title}>
                <span>Контакты. РАЗМЕРЫ ЗАГОЛОВКОВ СДЕЛАТЬ ВЕЗДЕ ОДИНАКОВЫМИ!</span>
            </div>
            <div className={styles.inputs}>
                <form className={styles.form} action="">
                    <p>
                        <input value='Ваше имя' type="text"/>
                    </p>
                    <p>
                        <input value='Ваш email' type="text"/>
                    </p>
                    <p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
          </div>
        </div>
    );
}

export default Contacts;
