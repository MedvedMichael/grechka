import axios from 'axios'

import { Product } from '../interfaces/Product'
import { Store } from '../interfaces/Store'
import querystring from 'querystring';
const apiBase = 'https://stores-api.zakaz.ua'


export const getAllStores = async () => 
    await axios.get(`${apiBase}/stores`, {
        headers: {
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        }
    }).then(res => res.data).then(data => 
        data.map(({id, name, address}: Store) => ({id, name, address}))
    ).catch(error => console.log(error)) as Store[]

export const getSearchedProductsFromStore = async (storeID: number, search: string) => {
    const url = `${apiBase}/stores/${storeID}/products/search?${querystring.stringify({q: search})}`
    
    return await axios.get(url).then(res => res.data)
        .then(({ results }: { results: any[] }) => 
            results.map((product: any) => ({ 
                title: product.title, 
                url: product.web_url, 
                imgURL: product.img?.s350x350, 
                price: product.weight ? product.price / product.weight * 1000 / 100 : product.price / 100,
                unit: 'грн/кг'
            })).sort((a,b) => a.price - b.price)) as Product[]
}
