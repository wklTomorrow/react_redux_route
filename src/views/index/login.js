import React from 'react'
import { connect } from 'react-redux'
import './head.less'
import { setDeviceTree } from '@/actions/systemInfo'
import PropTypes from 'prop-types'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.onLogin.bind(this)
        this.state = {

        }
    }
    onLogin() {
        // console.log(this.props.systemInfo)
        // debugger
        let obj = {
            isLogin: true
        }
        this.props.logins(obj)
        this.props.history.push('/Device')
    }
    render() {
        return (
            <div className="login">
                <button onClick={() => this.onLogin()}>登录</button>
            </div>
        )
    }
}

Login.propTypes = {
    systemInfo: PropTypes.object,
    logins: PropTypes.func
}

const mapStateToProps = state => {
    console.log(state)
    return {
        systemInfo: state.systemInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logins: state => dispatch(setDeviceTree(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)