import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import math from '../lib/math';
import {Title} from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProducts {
  recommendedProducts: IProduct[];
}

export default function Home({recommendedProducts}: HomeProducts) {

  async function handleSum() {
    const {sum} = (await import('../lib/math')).default;

    alert(sum(3, 5))
  }

  return (
    <div>
      <Title>Olá Mundo</Title>
 
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(product => (
            <li key={product.id} >
              <h1>{product.title}</h1>
            </li>
          ))}
        </ul>
      </section>
      <button onClick={handleSum} >Sum!</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProducts> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts= await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
  };
