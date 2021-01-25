import React from "react";
import {useHistory} from "react-router-dom";
import FilterProvider from "../context/filter";
import SearchComponent from "../components/Search";

const Search = () => {
    const history = useHistory();
    console.log('history', history);
    return (
        <FilterProvider>
            <main>
                <SearchComponent/>
            </main>
        </FilterProvider>
    );
};

export default Search;
