// loading in collection of other libraries
import React from 'react'  // the red names are obviously just variables we can use in place of calling explicitely 'react' etc.
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

window.renderView = function(data) { // renders react portion of page
    ReactDOM.render( // library in React that manipulates the view
        <Posts data={data} />, // renders one component.  This is the enntire appliation and nested within.  Posts is a class and is yellow plus uppercase.  Is JSX, looks like HTML but is invalid JS.  Babel is converting this to appropriate JS code.
        // sending in props which look like data={data}
        // render can only mount (/) component
        // <Posts... is imported from import Posts from '../components/Posts'
        document.getElementById('posts')) // always must be hooked to an element in a page.
}

renderView(posts) // global posts variable brought in from posts.js and passes it to renderView(data) which is then utilized as {data} which gores in to Posts the class.
