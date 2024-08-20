import axios from 'axios'
import configs from './endpoints.json' 

const productServiceBff = axios.create({
    baseURL: `${configs.productServiceBff}`
})

const newCartServiceBff = axios.create({
    baseURL: `${configs.createNewCartServiceBff}`
})

const addItemToCartServiceBff = axios.create({
    baseURL: `${configs.addItemToCartServiceBff}`
})

const getByUserIdCartServiceBff = axios.create({
    baseURL: `${configs.getByUserIdCartServiceBff}`
})

const ApiInstance = {
    getByUserIdCartServiceBff,
    productServiceBff,
    newCartServiceBff,
    addItemToCartServiceBff
}

export default ApiInstance