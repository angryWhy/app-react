import React,{Component} from "react";
export default class App extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const pStyle={
            color:"orange",
            textDecoration:"underline"
        }
        return(<div>
               <h2 style={{"fontSize":"50px"}}>我是标题</h2>
               <p style={pStyle}>我是段落</p>
               </div>)
    }
}