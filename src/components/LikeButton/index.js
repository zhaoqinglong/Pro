import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default  class LikeButton extends Component{

  constructor() {
    super();
    this.state={
      isLiked:false,
    }
  }
  handleClickOnLikeButton(){
    this.setState({
      isLiked:!this.state.isLiked
    })
  }

  render(){
    const likedText=this.props.likedText||"取消";
    const unlikedText=this.props.unlikedText||"点赞";    
    return(
      <div>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked?likedText:unlikedText}👍</button>
      </div>
    )
  }
}

