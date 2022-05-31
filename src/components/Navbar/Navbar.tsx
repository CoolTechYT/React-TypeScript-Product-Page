import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles['navbar']}>
            <span>Logo</span>
            <span>My Cart</span>
        </nav>
    )
}

export default Navbar;