import React, {Component} from 'react'

export default class CommentInput extends Component{
  render(){

    return(
      <div className='comment-input'>
        <div className="comment-filed">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-filed-input">
            <input />
          </div>
        </div>
        <div className="comment-filed">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-filed-input">
            <textarea />
          </div>
        </div>
        <div className="comment-filed-button">
          <button>
            发布
          </button>
        </div>        
      </div>
    )

  }
}