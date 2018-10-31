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
let style2 = {fontSize:".4rem",position:"absolute",right:"0.8rem",color:"#333",textDecoration:"none"};
const insert2 = <a href="##" style={style2}>编辑</a>;

// 没登陆时显示的 登录视图；
const SCLogin =  <div className="ShoppingCart">
                    <CartHeader title="购物车" insert={insert}/>
                    <ShoppingLogin isLogin={false}/>
                </div>;

// 登陆后 显示的购物车;
const SCContent = <div className="ShoppingCart">
                    <CartHeader title="购物车" insert={insert2}/>
                    <div className="cart_content">
                        <div className="mianyou">已满足免邮条件</div>
                        <div className="huangou">换购</div>
                        <div className="CartItem_box">
                            <div className="CartItem">
                                <i className="iconfont icon-gou3"></i>
                                <img src="http://yanxuan.nosdn.127.net/cc110d46106e6b22525c34d3bcb6caa2.png?imageView&thumbnail=160x0&quality=75" alt=""/>
                                <div className="describe">
                                    <span className="des-title">经典切尔西女皮靴</span>
                                    <p className="des-content">黑色；40</p>
                                    <span className="des-price">￥349.00</span>
                                    <div className="count_box">
                                        <i className="iconfont icon-jianhao minus"></i>
                                        <div className="des-count">1</div>
                                        <i className="iconfont icon-jiahao add"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total-wrap">
                            <div className="total-left">
                                <i className="iconfont icon-gou3"></i>
                                <span className="selected">已选（1）</span>
                                <span className="total">合计：￥349.00</span>
                            </div>
                            <div className="total-btn">
                                <button>下单</button>
                            </div>
                        </div>
                    </div>
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