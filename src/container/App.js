import React from "react"
import Nav from "../component/Nav/Nav"
import { Route } from "react-router-dom"
import Home from "./home/Home"
import Classify from "./classify/Classify"
import ProFile from "./profile/ProFile"
import Shiwu from "./shiwu/Shiwu"
import ShoppingCart from "./shoppingCart/ShoppingCart"

export default class App extends React.Component {
    render() {
        return <div>
            <Route path='/wyyx' component={Home} exact={true} />
            <Route path='/wyyx/classify' component={Classify} />
            <Route path='/wyyx/profile' component={ProFile} />
            <Route path='/wyyx/shiwu' component={Shiwu} />
            <Route path='/wyyx/shoppingCart' component={ShoppingCart} />
            <Nav />
        </div>
    }
}