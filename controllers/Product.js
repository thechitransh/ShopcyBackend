const Product = require("../models/ProductModel");

const getAllProducts = async () => {
    const products = await Product.find();
    return products;
}

const addProduct = async (name, price, quantity) => {
    const product = Product.create({ name, price, quantity });
    return product;
}
const addQuantity = async (id) => {
    const product = Product.findByIdAndUpdate({ _id: id }, { $inc: { quantity: 1 } });
    return product;
}
const removeQuantity = async (id) => {
    const product = Product.findByIdAndUpdate({ _id: id }, { $inc: { quantity: -1 } });
    return product;
}
const deleteProduct = async (id) => {
    const product = Product.deleteOne({ _id: id });
    return product;
}
const singleProduct = async (id) => {
    const product = Product.findOne({ _id: id });
    return product;
}
const singleUpdate = async (id, name, price, quantity) => {
    const product = Product.findByIdAndUpdate({ _id: id }, { name, price, quantity });
    return product;
}

module.exports = {
    getAllProducts,
    addProduct,
    addQuantity,
    removeQuantity,
    deleteProduct,
    singleProduct,
    singleUpdate
}