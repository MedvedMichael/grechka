import React from 'react'
import styled from 'styled-components'
import {Product} from '../../interfaces/Product'

interface ProductCardProps {
    product: Product
}

const ProductCardView = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.189057);
  border-radius: 6px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default function ProductCard({product}: ProductCardProps) {

    return (
        <ProductCardView>
            <Img src={product.imgURL}/>
            <h2>{product.title}</h2>
            <p>{product.price} {product.unit || "grn/kg"}</p>
        </ProductCardView>
    )
}

