import { createStore, combineReducers } from 'redux'
import Todo from './module/todo'
import deviceTree from './module/deviceTree'
import systemInfo from './module/systemInfo'

const store = createStore(combineReducers({
    Todo,
    deviceTree,
    systemInfo
}))

export default store