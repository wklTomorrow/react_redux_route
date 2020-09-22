import * as types from '@/actions/actionsTypes'

const stores = {
    value: 0
}
const setDeviceTree = (state = stores, action) => {
    switch(action.type) {
        case types.SET_DEVICE_TREE:
            return {
                ...state,
                value: action.value,
            }
        default: 
            return {
                ...state,
                value: 0
            }
    } 
}
export default setDeviceTree