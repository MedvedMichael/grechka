import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import FilterProvider from "../context/filter";
import SearchComponent from "../components/Search";
import SearchedGrechka from "../components/SearchedGrechka";

const Message = styled.h2`
    margin: 30px auto;
`;

const Search = () => {
    const history = useHistory();
    return (
        <FilterProvider>
            <SearchComponent/>
            <Message>Это поиск по всем продуктами, надо ввести минимум 3 буквы для поиска</Message>
            <SearchComponent/>
        </FilterProvider>
    );
};

export default Search;
