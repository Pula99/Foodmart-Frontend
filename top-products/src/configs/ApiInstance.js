import axios from 'axios'
import configs from './endpoints.json' 

const productServiceBff = axios.create({
    baseURL: `${configs.productServiceBff}`
})

const ApiInstance = {
    productServiceBff
}

export default ApiInstance