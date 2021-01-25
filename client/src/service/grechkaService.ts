import api from '../axios'
import {Store} from '../../../interfaces/Store'
import { Product } from '../../../interfaces/Product'
export interface StoreWithProducts {
    store: Store
    products: Product []
}
export const getGrechkaWithStores = async () => api.get('/grechka').then(res => res.data) as Promise<StoreWithProducts[]>