import React from "react"
import {NavLink} from "react-router-dom"
import "./index.less"

export default class Nav extends React.Component {
    render(){
        return <div className="nav_box">
            <NavLink to="/" exact={true}>
                <span>首页</span>
            </NavLink>
            <NavLink to="/shiwu" exact={true}>
                <span>识物</span>
            </NavLink>
            <NavLink to="/classify" exact={true}>
                <span>分类</span>
            </NavLink>
            <NavLink to="/shoppingCart" exact={true}>
                <span>购物车</span>
            </NavLink>
            <NavLink to="/proFile" exact={true}>
                <span>个人</span>
            </NavLink>
        </div>
    }
}