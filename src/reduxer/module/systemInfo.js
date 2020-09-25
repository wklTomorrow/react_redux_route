import * as types from '@/actions/actionsTypes'
import obj from '../../api/first'
import store  from '../../reduxer'

// const store = {
    
// }
const setSystemInfo = (state = {
    isLogin: false
}, action) => {
    switch(action.type) {
        case types.SET_SYSTEM_INFO: 
            return {
                ...state,
                ...action.systemInfo
            }
        default: 
            return {
                ...state
            }
    } 
}

export default setSystemInfo