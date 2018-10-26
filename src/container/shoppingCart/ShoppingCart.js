import React from "react"
import CartHeader from "../../component/CartHeader/CartHeader"
import ShoppingLogin from "./ShoppingLogin/ShoppingLogin"
import OpenApp from "../../component/OpenApp/OpenApp"
import "./index.less"

//在CartHeader中插入领券元素
    //登录界面的头部
let style = {fontSize:".4rem",position:"absolute",right:"0.8rem",color:"#b4282d",textDecoration:"none"};
const insert = <a href="##" style={style}>领券</a>;
    //购物车界面的头部
const insert2 = <a href="##" style={style}>编辑</a>;

// 没登陆时显示的 登录视图；
const SCLogin =  <div className="ShoppingCart">
                    <CartHeader title="购物车" insert={insert}/>
                    <ShoppingLogin/>
                </div>;

// 登陆后 显示的购物车;
const SCContent = <div>
                        <CartHeader title="购物车" insert={insert2}/>
                    </div>;

export default class ShoppingCart extends React.Component{
    render() {
        
        return <div className="SCWrap">
            <OpenApp/>
            {
                true?SCContent:SCLogin
            }
           
        </div>
    }
}