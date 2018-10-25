import React from "react"
import Nav from "../component/Nav/Nav"

export default class App extends React.Component {
    render() {
        return <div>
            <Route path='/' component={Home} exact={true} />
            <Route path='/classify' component={Classify} />
            <Route path='/profile' component={ProFile} />
            <Route path='/shiwu' component={Shiwu} />
            <Route path='/shoppingCart' component={ShoppingCart} />
            <Nav />
        </div>
    }
}