import React from 'react'
import { connect } from 'react-redux'
import { setValue } from '@/actions/todo'
import PropTypes from 'prop-types'

const Second = ({values, clickThis, history}) => {
    return (
        <div>
            <span>Second</span>
            <span>{values}</span>
            <button onClick={() => clickThis(values + 1)}>clickMe</button>
            <button onClick={() => {history.push('First')}}>跳转至first</button>
        </div>
    )
}
Second.propTypes = {
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
        clickThis: value => dispatch(setValue(value))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Second)