import React from 'react'
import './index.less'

export default class LoginHome extends React.Component {
    render() {
        return <div className='login_home'>
            <div className='login_logo'>
                <img src='http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png' alt='' />
            </div>
            <div className='btn_box'>
                <div className='phone_btn'>
                    <i></i>
                    <span>手机号码登录</span>
                </div>
                <div className='email_btn'>
                    <i></i>
                    <span>邮箱账号登录</span>
                </div>
                <span>手机号快捷注册></span>
            </div>
            <div className='third_box'>
                <div className='item_box'>
                    <span className='item'>
                        <i></i>
                        <span className='name'>微信</span>
                    </span>
                </div>
                <div className='item_box'>
                    <span className='item'>
                        <i></i>
                        <span className='name'>QQ</span>
                    </span>
                </div>
                <div className='item_box'>
                    <span className='item'>
                        <i></i>
                        <span className='name'>微博</span>
                    </span>
                </div>
            </div>
        </div>
    }
}