import api from '../axios'
import {Store} from '../../../interfaces/Store'
import {Product, ProductWithStore} from '../../../interfaces/Product'
export interface StoreWithProducts {
    store: Store
    products: Product []
}

export const mapDataFromApi = (data:StoreWithProducts[]):ProductWithStore[] => data.reduce((prev, {products, store}) => {
    return [...prev, ...products.map(item => ({...item, store}))]
}, [] as ProductWithStore[]).sort((a, b) => a.price - b.price);

export const getGrechkaWithStores = async () => api.get('/grechka').then(res => res.data) as Promise<StoreWithProducts[]>
