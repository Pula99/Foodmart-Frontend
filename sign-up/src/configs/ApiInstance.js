import axios from "axios"
import configs from "./endpoints.json"

const userAuthBff = axios.create({
    baseURL: `${configs.userAuthBff}`
})

const userMicroService = axios.create({
    baseURL: `${configs.userMicroService}`
})

const ApitInstance = {
    userAuthBff,
    userMicroService
}

export default ApitInstance;