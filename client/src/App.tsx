import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Nav from "./Nav";
import ProductCard from "./ProductCard";
import { getGrechkaWithStores } from './service/grechkaService';
import { Product } from '../../interfaces/Product';
import Spinner from './Spinner';


const MainApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const [grechka, setGrechka] = useState([] as Product[])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGrechkaWithStores().then(data => {
      const newGrechka = data.map(item => item.products[0])
      setGrechka(newGrechka.sort((a, b) => a.price - b.price))
      setLoading(false)
    })
  }, [])

  const restGrechkasViews = grechka.slice(1).map(item => <ProductCard key={item.url} product={item} />)
  return (
    <MainApp>
      <Nav />
      {loading
        ? <Spinner />
        : <>
        <CheapestGrechkaTitle>After a long search and sleepless nights, our team finally found the cheapest buckwheat in the stores of our hometown - Kiev</CheapestGrechkaTitle>
          <CheapestGrechkaBlock>
            
            
            <ProductCard product={grechka[0]} big/>
          </CheapestGrechkaBlock>
          <GrechkaBlock>
            {restGrechkasViews}
          </GrechkaBlock>
        </>
      }
    </MainApp>
  );
}

const CheapestGrechkaBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
`

const CheapestGrechkaTitle = styled.h1`
    text-align: center;
    font-size: xx-large;
    padding: 0 3rem;
`

const GrechkaBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`
