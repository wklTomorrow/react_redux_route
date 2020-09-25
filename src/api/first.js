import api from '@/utils/api'
import url from '@/utils/urls'

let obj = {
    onGetFirstCon() {
        console.log(api)
        return api.get(`${url.API_URL}first`)
    }
}

export default obj