// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions';
import { Container, Typography, List, Card, CardContent, Chip, Alert } from '@mui/material';

const ProductList = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setProducts(props.products));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, props.products]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && products && products.length > 0 ? (
        <List>
          {products.map((product) => (
            <Card key={product?.id} sx={{ marginBottom: '8px' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {product?.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {`$${product?.price}`}
                </Typography>
                <Chip label={product?.category} color="primary" />
              </CardContent>
            </Card>
          ))}
        </List>
      ) : (
        <Typography variant="body1">
          {products && products.length === 0 ? 'No products found.' : ''}
        </Typography>
      )}
    </Container>
  );
};

export default ProductList;
