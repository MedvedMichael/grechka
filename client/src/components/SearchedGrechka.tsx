import React, {useEffect, useState} from "react";
import {StoreWithProducts} from "../service/grechkaService";
import {GrechkaBlock} from "../pages/Main";
import api from "../axios";
import {useFilter} from "../context/filter";
import Loading from "./Loading";
import {mapDataFromApi} from "../service/grechkaService";
import {ProductWithStore} from "../../../interfaces/Product";
import ProductCard from "./ProductCard";

const SearchedGrechka: React.FC = () => {
    const [data, setData] = useState<ProductWithStore[] | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const {filter} = useFilter();
    useEffect(() => {
        setLoading(true)
        api.get<StoreWithProducts[]>(`/${filter}`)
            .then<void>(({data}) => {
                if (Array.isArray(data)) {
                    setData(mapDataFromApi(data));
                } else {
                    setData(undefined);
                }
            }).finally( () => setLoading(false))
    }, [filter]);
    return (
        <GrechkaBlock>
            <Loading loading={loading}>
                {
                        data?.length && data?.map(product => <ProductCard product={product} key={product.imgURL}/>) || "Nothing to find "
                }
            </Loading>
        </GrechkaBlock>
    )
}

export default SearchedGrechka
