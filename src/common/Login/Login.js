import React from 'react'
import './index.less'
import LoginHome from './LoginHome/LoginHome'

export default class Login extends React.Component {
    render() {
        return <div className='login_box'>
            <div className='header'></div>
            <LoginHome />
        </div>
    }
}