import React from 'react'
import { connect } from 'react-redux'
import { setDeviceTree } from '@/actions/deviceTree'
import PropTypes from 'prop-types'
import api from '@/api/first'

class DeviceTree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
        this.onDeleteThis.bind(this)
        this.onPostOne.bind(this)
    }
    componentDidMount() {
        this.onGetData()
        // const [values, clickThis] = this.props
        console.log(this.state)
    }
    async onGetData() {
        let data = await api.onGetAllUsers()
        console.log(data.data)
        this.setState({
            ...this.state,
            user: Object.values(data.data.data)
        })
    }
    async onDeleteThis(obj) {
        let data = await api.onDeleteCurValue(obj.id)
        this.setState({
            ...this.state,
            user: Object.values(data.data.data)
        })
        console.log(data)
    }
    async onPostOne() {
        let params = {
            "name" : "addOne",
            "password" : "password2",
            "profession" : "librarian",
            "id": 4
        }
        let data = await api.onAddOneUsers(params)
        this.setState({
            ...this.state,
            user: Object.values(data.data.data)
        })
        console.log(data)
    }
    async onGetAllFile() {
        console.log(111)
        let dom = document.getElementById('contain')
        let data = await api.onGetFile()
        console.log(data)
        dom.innerHTML = data.data
    }
    render() {
        const { values, clickThis } = this.props 
        return (
            <div>
                <span>deviceTree</span>
                <span>{this.props.values.value}</span>
                <span>{values.value}</span>
                <button onClick={() => clickThis(values.value + 1)}>点我</button>
                <div>
                    {this.state.user.map((ele, index) => {
                        return (
                            <div key={index}>
                                {ele.name}
                                <button onClick={() => this.onDeleteThis(ele)}>删除</button>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => this.onPostOne()}>点我增加一个</button>
                <button onClick={this.onGetAllFile.bind(this)}>获取文件</button>
                <div style={{height: '400px', width: '400px'}} id='contain'></div>
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