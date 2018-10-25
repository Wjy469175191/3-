import React from "react"
import ReactDOM from "react-dom"
import {HashRouter,Route,Switch,Redirect} from "react-router-dom"
import {Provider} from "react-redux"
import App from "./container/App"
import store from "./store/index"



ReactDOM.render(<div>
    <HashRouter>
        <Provider store={store}>
            <Switch>
                <Route path='/wyyx' component={App}/>    
                <Redirect to='/wyyx'/>
            </Switch>
           
        </Provider>
    </HashRouter>

</div>, window.root)

