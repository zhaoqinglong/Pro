import React, { Component } from 'react';
import LikeButton from '../../components/LikeButton/index'

export default class test extends Component{
  render(){
    return(
      <div>
        <span>hello world</span>
        <LikeButton />
        <LikeButton likedText='已赞' unlikedText='赞' />
      </div>
    )
  }
}

