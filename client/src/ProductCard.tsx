import React from 'react'
import styled from 'styled-components'
import { Product } from '../../interfaces/Product'

interface ProductCardProps {
  product: Product,
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
  height: 100%; 
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.189057);
  }
  border-radius: 6px;
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
    <ProductCardView onClick={handleClick} style={big ? { width: 600 } : {}}>
      <Img style={big ? { height: 400 } : {}} src={product.imgURL} />
      <h2>{product.title}</h2>
      <p>{product.price} {product.unit || "grn/kg"}</p>
    </ProductCardView>
  )
}

