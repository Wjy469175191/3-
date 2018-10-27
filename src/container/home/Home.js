import React from "react";
import Header from "./Header.js";
import "./index.less";
import {connect} from "react-redux";
import action from "../../store/actions";  

class Home extends React.Component{
    render() {
        return <div>
           <Header />
        </div>
    }
}

export default connect(state=>({...state.Home}),action)(Home); 
