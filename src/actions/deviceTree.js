import * as types from './actionsTypes'

export function setDeviceTree(value) {
    return {
        type: types.SET_DEVICE_TREE,
        value
    }
}