
import express from 'express'
import { getAllStores, getSearchedProductsFromStore } from './services/products-api'
import cors from 'cors'
const path = require('path'),
  bodyParser = require("body-parser");
const port = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../../client/build')));



app.get('/api', (req, res) => {
  res.status(200).send({ok: true})
})

app.get('/api/grechka', async (req, res) => {
  try {
    const stores = (await getAllStores()).filter(store => store.address.city === 'Kyiv')
    const grechkaProducts = await Promise.all(stores.map(async store => ({
      store, 
      products:  (await getSearchedProductsFromStore(store.id, 'гречана крупа'))
        .map(product => ({ 
          ...product, 
          price: Math.floor((product.weight ? product.price / product.weight * 10 : product.price / 100 ) * 100) / 100 
        }))
        .sort((a,b) => a.price - b.price)
    })))
    res.status(200).send(grechkaProducts)
  }
  catch (error) {
    res.status(500).send(error)
  }
})

app.get('/api/stores', async (req, res) => {
  try {
    const stores = (await getAllStores()).filter(store => store.address.city === 'Kyiv')
    res.status(200).send(stores)
  }
  catch (error) {
    res.status(500).send(error)
  }
})

app.get('/api/:name', async (req, res) => {
  try {
    const stores = (await getAllStores()).filter(store => store.address.city === 'Kyiv')
    const products = await Promise.all(stores.map(async store => ({
      store, 
      products:  (await getSearchedProductsFromStore(store.id, req.params.name))
        .map(product => ({ 
          ...product, 
          price: Math.floor((product.price / 100) * 100) / 100 ,
          unit: 'grn'
        }))
    })))
    res.status(200).send(products)
  }
  catch (error) {
    res.status(500).send(error)
  }
})

app.use('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
})



app.listen(port, async () => {
  console.log('Web server is on port ' + port);
})
