import React from 'react'
// import './head.less'
class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '1'
        }
    }
    render() {
        return (
            <div className="header">Header</div>
        )
    }
}

export default Header