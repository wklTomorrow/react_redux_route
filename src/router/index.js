import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Route
} from "react-router-dom";
import { createHashHistory } from 'history';
import App from '@/views/index'
// import First from '@/views/todo/first'
// import Second from '@/views/todo/second'
import Space from '@/views/space'
import Device from '@/views/device'
import DeviceGroup from '@/views/deviceGroup'
import DeviceTree from '@/views/deviceTree'
const hashHistory = createHashHistory();

class MyRoute extends React.Component {
    render() {
        return (
        <Router>
            <HashRouter history={hashHistory}>
               <App history={hashHistory}>
                    <Route path="/Space" exact component={Space}></Route>
                    <Route path="/Device" exact component={Device}></Route>
                    <Route path="/DeviceGroup" exact component={DeviceGroup}></Route>
                    <Route path="/DeviceTree" exact component={DeviceTree}></Route>
                    <Redirect from={'/'} to={'/Device'}></Redirect>
                    {/* <Route path="/First" exact component={First}></Route> */}
                    {/* <Route path="/Second" exact component={Second}></Route> */}
               </App>
            </HashRouter>
        </Router>
        )
    }
}
export default MyRoute
