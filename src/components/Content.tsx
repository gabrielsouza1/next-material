import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

import CoffeeCard from './CoffeeCard';

import data from '../constants';

interface Product {
  title: string;
  price: string;
  description: string;
  avatarUrl: string;
  imageUrl: string;
}

export default function Content() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <Grid container spacing={4}>
      {
        products.map((product) => (
          <Grid key={product.title} xs={12} sm={6} md={4} item>
            <CoffeeCard
              avatarSrc={product.avatarUrl}
              imgSrc={product.imageUrl}
              title={product.title}
              subtitle={product.price}
              description={product.description}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}
