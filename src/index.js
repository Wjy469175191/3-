import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./container/App"
import store from "./store/index"
import Login from './component/Login/Login'



ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Switch>
                <Route path='/wyyx' component={App} />
                <Route path='/login' component={Login} />
                <Redirect to='/wyyx' />
            </Switch>

        </Provider>
    </HashRouter>

    , window.root)

