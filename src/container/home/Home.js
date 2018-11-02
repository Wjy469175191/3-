import React from "react";
import Header from "./Header.js";
import Slider from "./Slider.js";
import "./index.less";
import {connect} from "react-redux";
import action from "../../store/actions";  

class Home extends React.Component{
    componentDidMount(){
           console.log(this.props)
           this.props.getSlider();
      
    }
    render() {
        return <div>
           <Header/>
           <Slider sliders={this.props.sliders}/>
           <ul className="item-list">
                <li className="item item1">
                    <a>
                        <i></i>
                        <span>网易自营品牌</span>
                    </a>
                </li>
                <li className="item item2">
                    <a>
                        <i></i>
                        <span>30天无忧退货</span>
                    </a>
                </li>
                <li className="item item3">
                    <a>
                        <i></i>
                        <span>48小时快速退款</span>
                    </a>
                </li>
           </ul>
        </div>
    }
}

export default connect(state=>({...state.homeR}),action)(Home); 
 
