import React from "react";
import logo from "./images/logo.png";
import search from "./images/search.png";

export default class Header extends React.Component{
    render() {
        return <div className="header-sec">
             <div className="header-bar">
                <a href=""><img src={logo}/></a>
                <div className="header-search">
                    <i><img src={search}/></i>
                    <span>搜索商品, 共17140款好物</span>
                </div>
             </div>
             <div className="header-list">
                <div className="list-box">
                    <ul className="list-bar" onClick={()=>{
                        
                    }}>
                        <li><span data-type="tuijan">推荐</span></li>
                        <li><span data-type="jujia">居家</span></li>
                        <li><span data-type="xiebao">鞋包配饰</span></li>
                        <li><span data-type="fuzhuang">服装</span></li>
                        <li><span data-type="dianqi">电器</span></li>
                        <li><span data-type="xihu">洗护</span></li>
                        <li><span data-type="yinshi">饮食</span></li>
                        <li><span data-type="canchu">餐厨</span></li>
                        <li><span data-type="yingtong">婴童</span></li>
                        <li><span data-type="wenti">文体</span></li>
                        <li><span data-type="tese">特色区</span></li>
                    </ul>
                </div>
             </div>
        </div>
    }
}
  
