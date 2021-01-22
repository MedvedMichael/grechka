
import express from 'express'
import { getAllStores, getSearchedProductsFromStore } from './services/products-api'
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.status(200).send({ok: true})
})

app.get('/grechka', async (req, res) => {
  try {
    const stores = (await getAllStores()).filter(store => store.address.city === 'Kyiv')
    const grechkaProducts = await Promise.all(stores.map(async store => ({store, products: await getSearchedProductsFromStore(store.id, 'гречана крупа')})))
    res.status(200).send(grechkaProducts)
  }
  catch (error) {
    res.status(500).send(error)
  }
})

app.get('/:name', async (req, res) => {
  try {
    const stores = (await getAllStores()).filter(store => store.address.city === 'Kyiv')
    const products = await Promise.all(stores.map(async store => ({store, products: await getSearchedProductsFromStore(store.id, req.params.name)})))
    res.status(200).send(products)
  }
  catch (error) {
    res.status(500).send(error)
  }
})

// app.get('/stores', async (req, res) => {
//   try {
//     const stores = (await getAllStores()).filter(store => store.address.city === 'Kyiv')
//     console.log(stores)
//     res.status(200).send(stores)
//   }
//   catch (error) {
//     res.status(500).send(error)
//   }
// })

app.listen(port, async () => {
  console.log('Web server is on port ' + port);
})
