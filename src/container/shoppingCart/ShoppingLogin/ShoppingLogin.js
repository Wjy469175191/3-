import React from "react"
import "./index.less"

export default class ShoppingLogin extends React.Component{
    render(){
        return <div className="SLogin">
            <div className="SLogin-header">
                <span><i className="iconfont icon-yuandian"></i>30天无忧退货</span>
                <span><i className="iconfont icon-yuandian"></i>48小时快速退款</span>
                <span><i className="iconfont icon-yuandian"></i>满88元免邮费</span>
            </div>
            <div className="SLogin-content">
                <div className="SLogin-img"></div>
                <span>去添加点什么吧</span>
                <a href="http://localhost:3000/#/login">登录</a>
            </div>
        </div>
    }
}