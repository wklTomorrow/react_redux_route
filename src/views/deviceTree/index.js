import React from 'react'
import { connect } from 'react-redux'
import { setDeviceTree } from '@/actions/deviceTree'
import PropTypes from 'prop-types'

class DeviceTree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // const [values, clickThis] = this.props 
        console.log(this.props)
    }
    render() {
        const { values, clickThis } = this.props 
        return (
            <div>
                <span>deviceTree</span>
                <span>{this.props.values.value}</span>
                <span>{values.value}</span>
                <button onClick={() => clickThis(values.value + 1)}>点我</button>
            </div>
        )
    }
}

DeviceTree.propTypes = {
    values: PropTypes.object,
    clickThis: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        values: state.deviceTree
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickThis: value => dispatch(setDeviceTree(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeviceTree)