import React, { PureComponent } from 'react'
import{ Comment} from"antd"
import{DeleteOutlined}from"@ant-design/icons"

export default class componentitem extends PureComponent {
    render() {
        const {nickName,avatar,content, datetime}=this.props.comment;
        return (
            <Comment
            author={nickName}
            avatar={avatar}
            content={
              <p>
            {content}
              </p>
            }
            datetime={datetime
            }
            actions={[
                
                    <span onClick={e=>{this.removeItem()}}> <DeleteOutlined/>删除</span>]
            }
          />
        )
    }
    
    removeItem(){
      this.props.removeItem();
    }
}
