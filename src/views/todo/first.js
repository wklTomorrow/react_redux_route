import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setValue } from '@/actions/todo'
import PropTypes from 'prop-types'

const First = ({values, clickThis, history}) => {
    const [count, setCount] = useState(0)
    function onClickThis() {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }
    return (
        <div>
            <span>First</span>
            <span>{values}</span>
            <button onClick={() => {clickThis(values + 1)}}>点我增加</button>
            <button onClick={() => {goSecond(history)}}>点击跳转至second</button>
            <div>{count}</div>
            <button onClick={onClickThis}>点我增加</button>
        </div>
    )
}
const goSecond = (history) => {
    history.push('Second')
}
First.propTypes = {
    values: PropTypes.number,
    clickThis: PropTypes.func
}

const mapStateToProps = state => {
    return {
        values: state.Todo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clickThis: test => dispatch(setValue(test))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(First)