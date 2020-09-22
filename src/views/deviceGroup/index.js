import React, { createContext, useContext, useState, useEffect } from 'react'
// import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { setDeviceTree } from '@/actions/deviceTree'
import PropTypes from 'prop-types'
// import { Redirect } from 'react-router-dom'
// import reducer from '@/reduxer/module/deviceTree'

const color = {
    light: {
        color: 'red',
        background: '#ffffff'
    },
    black: {
        color: 'white',
        background: 'black'
    }
}
const C = createContext(null)
const BColor = createContext(color.light)
const DeviceGroup = function({values, clickThis}) {
    const [n, setN] = useState(1)
    useEffect(() => {
        // console.log(state, dispatch)
    })
    return (
        <div>
            <span>DeviceGroup</span>
            <C.Provider value={{n, setN}}>
                <Baba></Baba>
            </C.Provider>
            <span>
                {n}
            </span>
            <BColor.Provider value={color.black}>
                <Baby></Baby>
            </BColor.Provider>
        </div>
        // <div>
        //     {/* { state.value } */}
        //     <span>
        //         {values.value}
        //     </span>
        //     <button onClick={() => clickThis(values.value + 1)}>点我</button>
        // </div>
    )
}
DeviceGroup.propTypes = {
    values: PropTypes.object,
    clickThis: PropTypes.func
}

const Baba = function() {
    const {n, setN} = useContext(C)
    return (
        <div>
            我是爸爸n: {n}
            <button onClick={() => setN(n + 1)}>点我增加</button>
        </div>
    )
}

const Baby = () => {
    const color = useContext(BColor)
    return (
        <div>
            <span style={{color: color.color, backgroundColor: color.background}}>
                childColor
            </span>
        </div>
    )
}

// class DeviceGroup extends React.Component {
//     render() {
//         return (
//             <div>DeviceGroup</div>
//         )
//     }
// }
const mapStateToProps = state => {
    return {
        values: state.deviceTree
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clickThis: state => dispatch(setDeviceTree(state))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeviceGroup)