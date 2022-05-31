import React from 'react';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css';
import Gallary from './components/Gallary/Gallary';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App: React.FC = () => {
  return (
    <div className={styles['product-page-wrapper']}>
      <Navbar />
      <section className={styles['product-details']}>
        <Gallary />
        <ProductDetails />
      </section>
    </div>
  )
}

export default App;