import React from 'react'
import styled from 'styled-components'
import {Product} from '../../interfaces/Product'


interface ProductCardProps {
    product: Product
}

export default function ProductCard ({product}: ProductCardProps) {

    return (
        <ProductCardView>
            {product.title}
        </ProductCardView>
    )
}

const ProductCardView = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
`