import React, {createContext, useContext, useEffect, useState} from "react";
import FilterService, {FilterService as FilterServiceType, Filter} from "../service/filterService";

const FilterContext = createContext<Filter>({filter: "", setFilter(filter: string) {}});

const FilterProvider:React.FC<any> = ({children, ...props}) => {
    const [filter] = useState<FilterServiceType>(FilterService);
    const [value, setValue] = useState<Filter>(() => getValue(FilterService));

    useEffect( () => filter.eventEmitter.subscribe(() => {
            setValue(getValue(filter))
        }), [filter]);

    return (
        <FilterContext.Provider value={value} {...props}>
            {children}
        </FilterContext.Provider>
    )
};

function getValue({filter, setFilter}:FilterServiceType):Filter {
    return {
        filter,
        setFilter
    }
}

export const useFilter = () => useContext<Filter>(FilterContext);

export default FilterProvider;
