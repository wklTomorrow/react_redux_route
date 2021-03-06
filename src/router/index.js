import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { createHashHistory } from 'history';
import App from '@/views/index'
import Login from '@/views/index/login'
// import First from '@/views/todo/first'
// import Second from '@/views/todo/second'
import Space from '@/views/space'
import Device from '@/views/device'
import DeviceGroup from '@/views/deviceGroup'
import DeviceTree from '@/views/deviceTree'
import Database from '@/views/database'
import Service from '@/views/service'
import store from '@/reduxer'
import { setDeviceTree } from '@/actions/systemInfo'
const hashHistory = createHashHistory();
const FrontendAuth = () => {
    // const isLogin = true
    // console.log(store.getState(), 1111)
    const system = store.getState().systemInfo
    console.log(system, 22222)
    if (system.isLogin) {
        return (
            <App history={hashHistory}>
                <Route path="/Space" exact component={Space}></Route>
                <Route path="/Device" exact component={Device}></Route>
                <Route path="/DeviceGroup" exact component={DeviceGroup}></Route>
                <Route path="/DeviceTree" exact component={DeviceTree}></Route>
                <Route path="/Database" exact component={Database}></Route>
                <Route path="/Service" exact component={Service}></Route>
                <Redirect from={'/'} to={'/Device'}></Redirect>
                {/* <Route path="/First" exact component={First}></Route> */}
                {/* <Route path="/Second" exact component={Second}></Route> */}
            </App>
        )
    } else {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Redirect from={'/'} to={'/Login'} exact></Redirect>
                <Route path="/Login" exact component={Login}></Route>
            </div>
        // <Login history={hashHistory}></Login>
        )
    }
}
class MyRoute extends React.Component {
    componentDidMount() {
        let isLogin = localStorage.getItem('isLogin')
        store.dispatch(setDeviceTree({
            isLogin: isLogin
        }))
    }
    render() {
        return (
        <Router>
            <HashRouter history={hashHistory}>
                <Switch>
                    <FrontendAuth></FrontendAuth>
                </Switch>
            </HashRouter>
        </Router>
        )
    }
}
export default MyRoute
