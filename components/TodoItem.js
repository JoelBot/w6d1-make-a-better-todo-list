import React, { Component } from 'react' // Ask what this is if you remember to
// nothing else to import because this is the children

const Todo = (props) => <div className="row todo-item animated rubberBand" onClick={props.markDone}>
    <div className="col-sm-12">
    <input type="checkbox" checked={props.data.done}/>
    <span style={{textDecoration:props.data.done?'line-through':''}}>  Item: {props.data.text}</span>
    </div>
    </div>

export default Todo
