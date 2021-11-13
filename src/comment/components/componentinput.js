/* eslint-disable no-undef */
import React, { PureComponent } from 'react'
import{Input ,Button,} from "antd"

export default class componentinput extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            content:""
        }
    }
    btnCLick(e){
        this.setState({
            content:e.target.value,
        })
    }
    addComment(){
        const commentInfo={
            id:Date.now(),
            avatar:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F30%2F20180730163717_gbqnc.thumb.700_0.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639306895&t=68c93acd8c3a8cd0d84a7b14fd532590",
            nickName:"强子",
            // eslint-disable-next-line no-undef
            datetime:new Date().toDateString(),
            content: this.state.content,
        }
        this.props.submitComment(commentInfo);
        this.setState({
            content:" "
        })
    }
    render() {
        return (
            <div>
                <Input.TextArea rows={5} value={this.state.content} onChange={e=>this.btnCLick(e)}/>
                <Button type="primary" onClick={e=>this.addComment()}>提交文字 </Button>
            </div>
        )
    }
}
