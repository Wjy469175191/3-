
import "./container/Profile/Profile"

import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route } from "react-router-dom"
import Home from "./container/home/Home"
import Classify from "./container/classify/Classify"
import ProFile from "./container/proFile/ProFile"
import Shiwu from "./container/shiwu/Shiwu"
import ShoppingCart from "./container/shoppingCart/ShoppingCart"
import { Provider } from "react-redux"
import App from "./container/App"
import store from "./store/index"



ReactDOM.render(<div>
    <HashRouter>
        <Provider store={store}>
            <Route path='/wyyx' component={App}/>
        </Provider>
    </HashRouter>

</div>, window.root)

