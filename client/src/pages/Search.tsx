import React from "react";
import {useHistory} from "react-router-dom";
import FilterProvider from "../context/filter";
import SearchComponent from "../components/Search";
import Footer from "../components/Footer";

const Search = () => {
    const history = useHistory();
    console.log('history', history);
    return (
        <FilterProvider>
            <main>
                <SearchComponent/>

            </main>
            <Footer/>
        </FilterProvider>
    );
};

export default Search;
