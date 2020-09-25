import api from '@/utils/api'
import url from '@/utils/urls'

let obj = {
    onGetFirstCon() {
        return api.get(`${url.API_URL}first`)
    },
    onGetAllUsers() {
        return api.get(`${url.API_URL}getUsers`)
    },
    onDeleteCurValue(params) {
        return api.delete(`${url.API_URL}getUsers?id=${params}`)
    },
    onAddOneUsers(params) {
        return api.post(`${url.API_URL}getUsers`, params)
    },
    onGetFile() {
        return api.get(`${url.API_URL}getFile`)
    }
}

export default obj