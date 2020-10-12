import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.timeout = 60000;
let conf = {
    // baseURL: 'http://10.4.92.137:3000/',
    baseURL: 'http://localhost:3000/',
    header: {

    }
}
const instance = axios.create(conf)

instance.interceptors.request.use(conf => {
    return Promise.resolve(conf)
}, error => {
    return error
})

instance.interceptors.response.use(conf => {
    return Promise.resolve(conf.data)
}, error => {
    return error
})

export default instance