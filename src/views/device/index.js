import React, { useEffect, useReducer, useState } from 'react'
import reducer from '@/reduxer/index'
import Todo from '@/reduxer/module/todo'
import api from '@/api/first'
const Device = function() {
    const [user, setUser] = useState({name: 'wang', age: 20})
    const [n, setN] = useState(0)
    const [state] = useReducer(reducer, Todo)
    const obj = {state}
    const onClick = () => {
        setUser({
            ...user,
            name: 'li'
        })
    }
    const onClickThis = () => {
        setN(i => i + 1)
        setN(i => i + 1)
    }
    useEffect(() => {
        console.log(obj)
        getData()
    }, [n])
    const getData = async () => {
        let zz = await api.onGetFirstCon()
        console.log(zz)
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <button onClick={onClick}>Click</button>
            <h1>n: {n}</h1>
            <button onClick={onClickThis}>点击</button>
        </div>
    )
}
// class Device extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     componentWillMount() {
//     }
//     render() {
//         return (
//             <div>Device</div>
//         )
//     }
// }

export default Device