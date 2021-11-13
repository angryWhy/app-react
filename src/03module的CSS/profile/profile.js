import React, { PureComponent } from 'react'
import profileStyle from"./profile.module.css"
export default class profile extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={profileStyle.h}>profile标题</h2>
            </div>
        )
    }
}
