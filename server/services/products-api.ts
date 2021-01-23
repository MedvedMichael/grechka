import axios from 'axios'

import { Product } from '../../interfaces/Product'
import { Store } from '../../interfaces/Store'
import querystring from 'querystring';
const apiBase = 'https://stores-api.zakaz.ua'


export const getAllStores = async () => 
    await axios.get(`${apiBase}/stores`, {
        headers: {
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        }
    }).then(res => res.data).then((data: any[]) => 
        data.map(({id, name, address}: Store) => ({id, name: name.split(' ')[0], address} as Store))
        .reduce((prev, curr) => {
            if(!prev.find(item => item.name === curr.name)) 
                prev.push(curr)

            return prev
        },[] as Store[])
    ).catch(error => console.log(error)) as Store[]

export const getSearchedProductsFromStore = async (storeID: number, search: string) => {
    const url = `${apiBase}/stores/${storeID}/products/search?${querystring.stringify({q: search})}`
    
    return await axios.get(url).then(res => res.data)
        .then(({ results }: { results: any[] }) => 
            results.map((product: any) => ({ 
                title: product.title, 
                url: product.web_url, 
                imgURL: product.img?.s350x350, 
                price: product.price,
                weight: product.weight
            }))) as Product[]
}
