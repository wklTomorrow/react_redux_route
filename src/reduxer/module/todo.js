import * as types from '@/actions/actionsTypes'

const setValue = (state = 0, action) => {
    switch(action.type) {
        case types.SET_VALUE: 
            return action.value
        default: 
            return state
    } 
}

export default setValue