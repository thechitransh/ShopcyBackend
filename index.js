const express = require('express')
require('./Db/db.js')
const cors = require('cors')
const { getAllProducts, addProduct, addQuantity, removeQuantity, deleteProduct, singleProduct, singleUpdate } = require('./controllers/Product.js')
const app = express()
app.use(cors())
app.use(express.json());

app.get('/api/products', async (req, res) => {
    const result = await getAllProducts()
    res.json({ data: result, msg: 'success' })
})
app.post('/api/addproducts', async (req, res) => {
    const { name, price, quantity } = req.body;
    const result = await addProduct(name, price, quantity)
    res.json({ data: result, msg: 'New Product Added' })
})
app.put('/api/addquantity', async (req, res) => {
    const { id } = req.body
    const result = await addQuantity(id)
    res.json({ data: result, msg: 'Added' })
})
app.put('/api/removequantity', async (req, res) => {
    const { id } = req.body
    const result = await removeQuantity(id)
    res.json({ data: result, msg: 'Removed' })
})
app.delete('/api/deleteproduct/:id', async (req, res) => {
    const { id } = req.params
    const result = await deleteProduct(id)
    res.json({ data: result, msg: 'Deleted' })
})
app.get('/api/singleproduct/:id', async (req, res) => {
    const { id } = req.params
    const result = await singleProduct(id)
    res.json({ data: result, msg: 'success' })
})
app.post('/api/singleupdate', async (req, res) => {
    const { id, name, price, quantity } = req.body
    const result = await singleUpdate(id, name, price, quantity)
    res.json({ data: result, msg: 'success' })
})

app.listen(3000, function () {
    console.log('Server running on port 3000')
})