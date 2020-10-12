import React from 'react'
import api from '@/api/first'

class Service extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.init()
    }
    async init() {
        let data = await api.onGetFirstTag()
        console.log(data)
    }
    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}

export default Service