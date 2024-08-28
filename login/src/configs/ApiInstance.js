import axios from "axios";
import configs from './endpoints.json'

const userAuthBff = axios.create({
    baseURL: `${configs.userAuthBff}`
})

const ApiInstance = {
    userAuthBff
}

export default ApiInstance;