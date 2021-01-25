import React from "react";
import styled from "styled-components";
import FilterProvider from "../context/filter";
import SearchComponent from "../components/Search";
import SearchedGrechka from "../components/SearchedGrechka";

const Message = styled.h2`
    margin: 30px auto;
`;

const Search = () => {
    return (
        <FilterProvider>
            <SearchComponent/>
            <Message>Это поиск по всем продуктами, надо ввести минимум 3 буквы для поиска</Message>
            <SearchedGrechka/>
        </FilterProvider>
    );
};

export default Search;