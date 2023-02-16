const Product = require('../database/models/productModel');
const {formatMongoData} = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({ ...serviceData });
        let result = await product.save();
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong: Services: createProduct', error);
        throw new Error(error);
    }
};