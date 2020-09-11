import React, { useState } from 'react'
// import First from '../todo/first'
// import Second from '../todo/second'
import Header from './head'
import menu from '@/utils/menu'
import './head.less'
// import { Route, Redirect } from 'react-router-dom'
const App = (props) => {
    const [count, setCount] = useState(0)
    const onClickThis = (ele, index) => {
        goRoute(ele.code)
        setCount(index)
    }
    function goRoute(path) {
        props.history.push(path)
    }
    return (
        <div className="index">
            <Header></Header>
            <div className="menu">{
                menu.map((ele, index) => {
                    return <div
                        className={count === index ? 'active-index menu-item' : 'menu-item'}
                        onClick={() => onClickThis(ele, index)}
                        key={ele.id + index}>{ele.name}</div>
                })
            }</div>
            <div className="item-body">
                {props.children}
            </div>
        </div>
    )
}

export default App