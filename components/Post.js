import React, { component } from 'react'  // does not need to import anything but react because it is the lowest child, end of the line.

const Post = (props) => <div className="post">
    <img src={props.data.image} alt="postTitle"/>
    <h3>{props.data.title}</h3>
    <p className="lead">
    Published On {props.data.date} at {props.data.time}
    </p>
    <p>
    {props.data.body}
    </p>
    <span className="small">Author: {props.data.author}</span>
    <br />
    </div>

export default Post
