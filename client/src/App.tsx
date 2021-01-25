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
  const [cheapGrechka, setCheapGrechka] = useState([] as Product[])
  const [richGrechka, setRichGrechka] = useState([] as Product[])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGrechkaWithStores().then(data => {
      const newCheapGrechka = data.map(item => item.products[0])
      setCheapGrechka(newCheapGrechka.sort((a, b) => a.price - b.price))
      const newRichGrechka = data.map(item => item.products[item.products.length - 1])
      setRichGrechka(newRichGrechka.sort((a, b) => b.price - a.price))
      setLoading(false)
    })
  }, [])

  const restCheapGrechkasViews = cheapGrechka.slice(1).map(item => <ProductCard key={item.url} product={item} />)
  const restRichGrechkasViews = richGrechka.slice(1).map(item => <ProductCard key={item.url} product={item} />)
  return (
    <MainApp>
      <Nav />
      {loading
        ? <Spinner />
        : <>
          <Title>After a long search and sleepless nights, our team finally found the cheapest buckwheat in the stores of our hometown - Kiev</Title>
          <BigGrechkaBlock>
            <ProductCard product={cheapGrechka[0]} big />
          </BigGrechkaBlock>
          <Title>Other cheap variant specially for you :)</Title>
          <GrechkaBlock>
            {restCheapGrechkasViews}
          </GrechkaBlock>
          <Title>Also, if you have enough money, you're able to feel rich and buy the most expensive buckwheat that we found!</Title>
          <BigGrechkaBlock>
            <ProductCard product={richGrechka[0]} big />
          </BigGrechkaBlock>
          <Title>And some less expensive variants for you)))</Title>
          <GrechkaBlock>
            {restRichGrechkasViews}
          </GrechkaBlock>
        </>
      }
    </MainApp>
  );
}

const BigGrechkaBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
`

const Title = styled.h1`
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
