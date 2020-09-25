import * as types from './actionsTypes'

export function setDeviceTree(systemInfo) {
    return {
        type: types.SET_SYSTEM_INFO,
        systemInfo
    }
}