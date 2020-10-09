import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/mn',
        timeout: 5000
    })

    instance.interceptors.response.use(result => {
        // console.log(result)
        return result.data;
    }, err => {
        console.log(err)
    })

    return instance(config);
}