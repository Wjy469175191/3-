import React from "react"
import {NavLink} from "react-router-dom"
import "./index.less"

export default class Nav extends React.Component {
    render(){
        return <div className="nav_box">
            <NavLink to="/wyyx" exact={true}>
                <i className="iconfont icon-home"></i>
                <span>首页</span>
            </NavLink>
            <NavLink to="/wyyx/shiwu" exact={true}>
                <i className="iconfont icon-yk_fangkuai"></i>
                <span>识物</span>
            </NavLink>
            <NavLink to="/wyyx/classify" exact={true}>
                <i className="iconfont icon-chouti"></i>
                <span>分类</span>
            </NavLink>
            <NavLink to="/wyyx/shoppingCart" exact={true}>
                <i className="iconfont icon-icon--"></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to="/wyyx/proFile" exact={true}>
                <i className="iconfont icon-geren10"></i>
                <span>个人</span>
            </NavLink>
        </div>
    }
}