import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react'
import reducer from '@/reduxer/index'
import Todo from '@/reduxer/module/todo'
import api from '@/api/first'
const Device = function() {
    const [user, setUser] = useState({name: 'wang', age: 20})
    const [n, setN] = useState(0)
    const [state] = useReducer(reducer, Todo)
    const obj = {state}
    const [objs, setObjs] = useState([])
    // let objs = []
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
        // console.log(obj)
        getData()
        // console.log(objs, 111)
    }, [])
    useLayoutEffect(() => {
        console.log(1000)
    })
    const getData = async () => {
        let zz  = await api.onGetFirstCon()
        setObjs(Object.values(zz.data.data.res))
        // objs = Object.values(zz.data.res)
        // console.log(objs, 222)
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <button onClick={onClick}>Click</button>
            <h1>n: {n}</h1>
            <button onClick={onClickThis}>点击</button>
            <div>
                {objs.map((ele, index) => {
                    return (
                        <div key={index + ele}>
                            {ele.name}
                            {ele.password}
                        </div>
                    )
                })}
            </div>
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