import React from 'react'
import api from '@/api/first'
import "./database.less"

class Database extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: []
        }
        this.onAddOne.bind(this)
        this.onDelete.bind(this)
    }
    componentDidMount() {
        this.init()
    }
    async init() {
        let data = await api.onGetAllName()
        this.setState({
            content: data
        })
        console.log(this.state)
    }
    async onAddOne() {
        let params = {
            name: 'test',
            age: '10',
            time: (new Date()).getTime()
        }
        let data = await api.onAddOneName(params)
        if (data.code === 200) {
            this.init()
        }
    }
    async onDelete(obj) {
        let data = await api.onDeleteOneById(obj.id)
        console.log(data)
        if (data.code === 200) {
            this.init()
        }
    }
    render() {
        return (
            <div className="database">
                <div className="item">
                    <div>
                    {
                        this.state.content.map((ele, index) => {
                            return (
                                <div key={index + ele}>
                                    <div>
                                        {ele.name}
                                    </div>
                                    <div>
                                        {ele.age}
                                    </div>
                                    <div>
                                        {ele.time}
                                    </div>
                                    <button onClick={() => this.onDelete(ele)}>点我删除</button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="item">
                    <button onClick={() => this.onAddOne()}>点我增加</button>
                </div>
            </div>
        )
    }
}

export default Database