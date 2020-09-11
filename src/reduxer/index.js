import { createStore, combineReducers } from 'redux'
import Todo from './module/todo'

const store = createStore(combineReducers({
    Todo
}))

export default store