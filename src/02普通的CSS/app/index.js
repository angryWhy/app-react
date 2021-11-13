import React, { PureComponent } from 'react'
import Home from '../home/home'
import Profile from '../profile/profile'
export default class index extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        )
    }
}
