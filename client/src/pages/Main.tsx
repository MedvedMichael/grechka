import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import Loading from "../Loading";
import {ProductWithStore} from "../../../interfaces/Product";
import {getGrechkaWithStores} from "../service/grechkaService";

const Main = () => {
    const [allGrechkas, setAllGrechkas] = useState([] as ProductWithStore[])
    const [loading, setLoading] = useState(true)
    const [growing, setGrowing] = useState(true)

    useEffect(() => {
        getGrechkaWithStores().then(data => {
            const grechka = data.reduce((prev, {products, store}) => {
                return [...prev, ...products.map(item => ({...item, store}))]
            }, [] as ProductWithStore[]).sort((a, b) => a.price - b.price)
            setAllGrechkas(grechka)
            setLoading(false)
        })
    }, [])
    const cheapGrechka = allGrechkas.slice(0, 4), richGrechka = allGrechkas.slice(allGrechkas.length - 6, allGrechkas.length - 1).reverse()
    const restCheapGrechkasViews = cheapGrechka.slice(1).map(item => <ProductCard key={item.url} product={item}/>)
    const restRichGrechkasViews = richGrechka.slice(1).map(item => <ProductCard key={item.url} product={item}/>)
    const restGrechkasView = allGrechkas.slice(5, allGrechkas.length - 7).map(item => <ProductCard key={item.url}
                                                                                                   product={item}/>)
    return (
        <Loading loading={loading}>
            <Title>After a long search and sleepless nights, our team finally found the cheapest buckwheat in the stores
                of our hometown - Kiev</Title>
            <BigGrechkaBlock>
                <ProductCard product={cheapGrechka[0]} big/>
            </BigGrechkaBlock>
            <Title>Other cheap variant specially for you :)</Title>
            <GrechkaBlock>
                {restCheapGrechkasViews}
            </GrechkaBlock>
            <Title>Also, if you have enough money, you're able to feel rich and buy the most expensive buckwheat that we
                found!</Title>
            <BigGrechkaBlock>
                <ProductCard product={richGrechka[0]} big/>
            </BigGrechkaBlock>
            <Title>And some less expensive variants for you)))</Title>
            <GrechkaBlock>
                {restRichGrechkasViews}
            </GrechkaBlock>
            <TitleBlock>
                <Title>Other variants of buckweat</Title>
                <Text>Growing</Text>
                <GrowSwitch>
                    <GrowingInput type="checkbox" checked={growing} onChange={() => setGrowing(!growing)}/>
                    <GrowSlider></GrowSlider>
                </GrowSwitch>
            </TitleBlock>
            <GrechkaBlock>
                {growing ? restGrechkasView : restGrechkasView.reverse()}
            </GrechkaBlock>
        </Loading>
    )
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
const Text = styled.p`
  margin: 1rem;
`

const GrechkaBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`
const GrowingInput = styled.input`

`

const TitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const GrowSwitch = styled.label`

  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & input {
    display: none;
  }

  & input:checked + span {
    background-color: #2196F3;
  }

  & input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

`

const GrowSlider = styled.span`

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

export default Main;
