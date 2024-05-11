import axios from 'axios'
import { baseURL, timeout  } from './config'
import useMainStore from '@/stores/modules/main'
const mainStore = useMainStore()

class Demo {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL: baseURL,
            timeout: timeout
        })
        this.instance.interceptors.request.use(config => {
            mainStore.loadFlag = true
            return config
        }, err => {
            return err
        })
        this.instance.interceptors.response.use(res => {
            mainStore.loadFlag = false
            return res
        }, err => {
            mainStore.loadFlag = false
            return err
        })
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config)
            .then(res => resolve(res))
            .catch(err => reject(err))
            .finally(() => {})
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
    delete(config) {
        return this.request({ ...config, method: 'delete' })
    }
}

export default new Demo( baseURL, timeout)