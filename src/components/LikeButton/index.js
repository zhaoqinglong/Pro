import React, { Component } from 'react';

export default  class LikeButton extends Component{

  static defaultProps={
    likedText:"取消",
    unlikedText:"点赞",
  }

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

    return(
      <div>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked?this.props.likedText:this.props.unlikedText}👍
        </button>
      </div>
    )
  }
}

