import React, { useEffect, useReducer, memo, useState, useMemo, useRef } from 'react'

const Store = {
    books: null,
    list: null
}

const reduxer = (state, action) => {
    switch (action.type) {
        case 'BOOKS': 
            return {
                ...state, 
                books: action.values
            }
        case 'LIST':
            return {
                ...state,
                list: action.values
            }
        default :
            return
    }
}

function Space() {
    const [state, dispatch] = useReducer(reduxer, Store)
    useEffect(() => {
        // console.log(state, dispatch)
    })
    const [m, setM] = useState(0)
    const [N, setN] = useState(0)
    const chickThis = () => {
        setN(m => m + 1)
    }
    // 不会更新孩子组件
    // const clickChild = () => {
        // console.log(111)
        // setM(m => m + 1)
    // }
    const clickChild = useMemo(() => {
        return () => {
            console.log(`on click m: ${m}`)
        }
    }, [m])
    return (
        <div>
            Space
            <span>
                { state.books }
            </span>
            <button onClick={() => dispatch({
                type: 'BOOKS',
                values: 'MyBook'
            })}>改变books</button>
            <div>
                <span>
                    { state.list }
                </span>
                <button onClick={() => dispatch({
                    type: 'LIST',
                    values: 'MyList'
                })}>改变list</button>
            </div>
            <div>
                <button onClick={chickThis}>改变Child</button>
            </div>
            <Child data={m} onClick={clickChild}></Child>
            <TextInputWithFocusButton></TextInputWithFocusButton>
        </div>
    )
}
const Child = memo((props) => {
    console.log('child')
    return (
        <div>
            child: {props.data}
            <div onClick={props.onClick}>点我</div>
        </div>
    )
})
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
// const Child = (props) => {
//     console.log('child')
//     return (
//         <div>
//             child: { props.data }
//         </div>
//     )
// }
// class Space extends React.Component {
//     render() {
//         return (
//             <div>Space</div>
//         )
//     }
// }

export default Space