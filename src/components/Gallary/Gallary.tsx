import React from 'react';
import styles from './Gallary.module.css';

const Gallary: React.FC = () => {
  return (
    <div className={styles['gallary']}>
        <div className={styles['main-image']}>

        </div>
        <div className={styles['image-options']}>
            <div className={styles['image']} />
            <div className={styles['image']} />
            <div className={styles['image']} />
            <div className={styles['image']} />
            <div className={styles['image']} />
        </div>
    </div>
  )
}

export default Gallary;