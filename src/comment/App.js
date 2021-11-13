import React, { PureComponent } from 'react'
import Componentitem from "./components/componentitem"
import Componentinput from './components/componentinput'
import "antd/dist/antd.less"
export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            contentList:[]
        }
    }
    submitComment(info){
        this.setState({
            contentList:[...this.state.contentList,info]
        });
    }
    removeContent(index){
       const newList=[...this.state.contentList];
       newList.splice(index,1)
       this.setState({
           contentList:newList
       })
    }
    render() {
        return (
            <div style={{width:"500px",padding:"20px"}}>
                {
                    this.state.contentList.map((item,index)=>{
                return<Componentitem comment={item} 
                        key={index} 
                        removeItem={e=>this.removeContent(index)}
                        />
                    })
                }
                <Componentinput submitComment={this.submitComment.bind(this)}/>
            </div>
        )
    }

}

