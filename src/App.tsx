import React from 'react';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css';
import Gallary from './components/Gallary/Gallary';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App: React.FC = () => {
  const images = [
    '/images/image_01.jpg',
    '/images/image_02.jpg',
    '/images/image_03.jpg',
    '/images/image_04.jpg',
    '/images/image_05.jpg',
  ];
  return (
    <div className={styles['product-page-wrapper']}>
      <Navbar />
      <section className={styles['product-details']}>
        <Gallary images={images} />
        <ProductDetails
          id={"j938hgj"}
          title="Product Title"
          price={25}
          description="Here is the best product that I have ever seen. You will love it!"
        />
      </section>
    </div>
  )
}

export default App;