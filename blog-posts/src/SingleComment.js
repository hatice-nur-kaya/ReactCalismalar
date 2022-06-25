import React from "react";
import  ReactDOM  from "react-dom";
import profile1 from './images/indir.jpeg'

const SingleComment =(props) =>{
    return (
        <div className="comment">
        <a href="/" className="avatar">
        <img  alt="profile picture" src={profile1} />
        </a>
        <div className="content">
          <a href="/" className="author">
              {props.name}
          </a>
          <div className="metadata">
              <span className="date">
              {props.date}
              </span>
          </div>
          <div className="text">
              {props.text}
          </div>
        </div>
    </div>
        
    )
}
export default SingleComment;