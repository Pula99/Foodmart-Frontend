import axios from 'axios'
import configs from './endpoints.json' 

const getByUserIdCartServiceBff = axios.create({
    baseURL: `${configs.getByUserIdCartServiceBff}`
})

const getProductById = axios.create({
    baseURL: `${configs.getProductById}`
})

const removeProductFromCart = axios.create({
    baseURL: `${configs.removeProductFromCart}`
})

const updateCartItem = axios.create({
    baseURL: `${configs.updateCartItem}`
})

const updateCart = axios.create({
    baseURL: `${configs.updateCart}`
})

const ApiInstance = {
    getByUserIdCartServiceBff,
    getProductById,
    removeProductFromCart,
    updateCartItem,
    updateCart
}

export default ApiInstance