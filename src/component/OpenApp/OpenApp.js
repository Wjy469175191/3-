import React from "react"
import "./index.less"
// 头部的 打开APP 组件；

export default class OpenApp extends React.Component{
    constructor(){
        super();
        this.state = {close: false,style: "block"}
    }
    close =()=>{
        this.setState({close: true});
        window.removeEventListener("scroll",this.myScroll);
    }
    myScroll = () =>{
        if(document.documentElement.scrollTop>=1){
            this.setState({style:"none"});
        }else{
            this.setState({style:"block"});
        }
    }
    componentDidMount(){
        window.addEventListener("scroll",this.myScroll)
    }
    render(){
        return <div style={{display: this.state.style}}>
            {this.state.close?null:<div className="OpenApp">
                <i onClick={this.close} className="iconfont icon-close-s"></i>
                <div className="OpenApp-text">
                    <span>前往APP领取新用户1000元现金红包</span>
                    <span>网易自营 优质生活</span>
                </div>
                <a href="##">打开APP</a>
            </div>}
        </div>
    }
}