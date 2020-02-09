import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <span className={styles.titleSpan}>Рассматриваю варианты удалённой работы. <br/>
            <strong>Выровнять ширину страницы по верхним блокам!!!!!</strong>
      </span>
      <button>Нанять меня</button>
    </div>
  );
}

export default Slogan;
