import React from "react"
import "./index.less"

//购物车 头部 组件；  改变title值 来改变头部显示文字； 通过insert插入元素
export default class CartHeader extends React.Component{
    render(){
        return <div className="cart_header">
            <span className="title">
                {this.props.title?this.props.title:null}
            </span>
            {this.props.insert?this.props.insert:null}
        </div>
    }
}