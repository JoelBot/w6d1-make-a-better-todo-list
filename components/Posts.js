import React, { Component } from 'react'  // Every component needs to import react
import Post from './Post' // This is the individual Post

const Posts = (props) => { // top level that contains the entire react section // STATELESS COMPONENTS for simplistic applications
    const PostItems = props.data.map((post, i) => {  // .map converts list of object to post components in an array
        // console.log(post)
        // console.log(i)
        return <Post data={post} key={i} /> // data here is what is in the middle of props.data.title on the Post.js file, if curious.
    })

    // console.log(PostItems)
    // can only return one thing at a time <div> is this example.  We can stuff as much within it as we'd like {PostItems}
    return <div>
        <h1>Blog Posts</h1>
        {PostItems}
    </div>
}

export default Posts
