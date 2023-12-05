// src/pages/index.js
import React from 'react';
import { Provider } from 'react-redux';
import ProductList from '../components/ProductList';
import store from '../redux/store';

const Home = ({ products }) => {
  return (
    <Provider store={store}>
      <ProductList products={products}/>
    </Provider>
  );
};

export const getStaticProps = async () => {
  // fetch data from an API
  try {
    const productsResponse = await fetch('http://localhost:4000/products').then((res) => res.json());
    const products = !productsResponse.error ? productsResponse : [];

    return {
      props: {
        products
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return {
      props: { products: [] },
    };
  }
};

export default Home;
