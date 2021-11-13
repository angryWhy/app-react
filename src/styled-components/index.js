import React, { PureComponent } from 'react'
import styled from "styled-components"
const Homewarpper = styled.div`
font-size:50px;
color:red;
.po{
    color:blue
}
`
export default class index extends PureComponent {
    render() {
        return (
            <Homewarpper>
                <h2>hello</h2>
                <p className="po">react</p>
            </Homewarpper>
        )
    }
}
