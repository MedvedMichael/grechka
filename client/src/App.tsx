import React from 'react';
import styled from "styled-components";
import Nav from "./Nav";
import Search from "./Search";
import ProductCard from "./ProductCard";

const MainApp = styled.main`
  width: 100%;
`;

function App() {
    return (
            <MainApp>
                <Nav/>
                <Search/>
                <ProductCard product={{title: "Title", price: 212, imgURL: "https://www.gastronom.ru/binfiles/images/20160524/bf5de78e.jpg", url: "https://www.gastronom.ru/binfiles/images/20160524/bf5de78e.jpg", unit:"hrn/kg", weight: 28}}/>
            </MainApp>
    );
}

export default App;
