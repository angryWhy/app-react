import React, { PureComponent } from 'react'
import homeStyle from "./home.module.css"
export default class home extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={homeStyle.h}>home标题</h2>
            </div>
        )
    }
}
