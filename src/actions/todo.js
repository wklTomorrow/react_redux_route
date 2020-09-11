import * as types from './actionsTypes'

export function setValue(value) {
    return {
        type: types.SET_VALUE,
        value
    }
}