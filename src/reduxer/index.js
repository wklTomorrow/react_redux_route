import { createStore, combineReducers } from 'redux'
import Todo from './module/todo'
import deviceTree from './module/deviceTree'

const store = createStore(combineReducers({
    Todo,
    deviceTree
}))

export default store