import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import {Title} from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProducts {
  recommendedProducts: IProduct[];
}

export default function Home({recommendedProducts}: HomeProducts) {

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
