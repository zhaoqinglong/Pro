import React ,{Component} from 'react';
import CommentInput  from '../Student/CommentInput';
import CommentList  from '../Student/CommentList';
import '../Student/index.css';

export default class CommentApp extends Component{
  render(){

    return(
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  
  }
}