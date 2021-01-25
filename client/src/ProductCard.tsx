import React from 'react'
import styled from 'styled-components'
import { ProductWithStore } from '../../interfaces/Product'

interface ProductCardProps {
  product: ProductWithStore,
  big?: boolean
}

const ProductCardView = styled.div`
  cursor: pointer;
  margin: .25rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  width: 300px;
  transition: box-shadow 100ms ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.189057);
  height: 450px; 
  justify-content: center;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.189057);
  }
  border-radius: 6px;

  &.big {
    width: calc(15rem + 30vw);
    height: auto;
  }

  & .big{
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default function ProductCard({ product, big }: ProductCardProps) {

  const handleClick = () => {
    window.open(product.url, "_blank")
  }

  return (
    <ProductCardView onClick={handleClick} className={big ? "big" : ''}>
      <Img className={big ? 'big' : ''} src={product.imgURL} />
      <h2>{product.title}</h2>
      <p>{product.price} {product.unit || "grn/kg"}</p>
      <p>Store: {product.store.name}</p>
    </ProductCardView>
  )
}

