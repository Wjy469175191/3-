import React from "react"
import { NavLink } from "react-router-dom"
import "./index.less"

export default class Nav extends React.Component {
    render() {
        return <div className="nav_box">
            <NavLink to="/wyyx" exact={true}>
                <span>首页</span>
            </NavLink>
            <NavLink to="/wyyx/shiwu" exact={true}>
                <span>识物</span>
            </NavLink>
            <NavLink to="/wyyx/classify" exact={true}>
                <span>分类</span>
            </NavLink>
            <NavLink to="/wyyx/shoppingCart" exact={true}>
                <span>购物车</span>
            </NavLink>
            <NavLink to="/wyyx/proFile" exact={true}>
                <span>个人</span>
            </NavLink>
        </div>
    }
}