import React, { Component } from 'react'
import TodoItem from './TodoItem'

// var myStorage = localStorage
var myStorage = localStorage
// const Todos = (props) => { // Just here for reference on what changed
class Todos extends Component {  // creating class of your component name.  This is boilerplate for stateful stuff.
    constructor(props) { // takes in the props
        super(props)  // takes in the props of the parent which is Component
        this.typing = this.typing.bind(this) // This is boilerplate stuff for react that binds this
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)
        this.state = { // this is creating a placeholder to keep track of data (or state) so it can be used later.
            newTodo: '', // newtodo is empty string.  All text being typed in input field as it is being typed.  Have to connect the connection between this and the field.
            todos: [] // todos list that have already been added
        }

    }
    componentWillMount() {
        console.log('mounting')
    }
    componentDidMount() {
        console.log('mounted')
        localStorage.setItem('this','sucks')
        console.log(myStorage)
        var getStorage = myStorage.getItem('todos')
        console.log(getStorage)
        var item = JSON.parse( localStorage.getItem( this ) )
        console.log(item)
    //     JSON.parse(getStorage, (object, value) => typeof value === 'object'? value: value     // return everything else unchanged
    // );
    // console.log(getStorage)
    //   this.setState(myStorage)
    // this.setState({
    //     todos: myStorage.getItem("todos")
    // })
}
componentWillUnmount() {
    console.log('unmounted')
}
typing(e) { // react is doing a lot of magic
    this.setState({
        newTodo: e.target.value // can add .toUpperCase() if you'd like.  everycharacter comes through this.
    })
}

enter(e) {
    if (e.key === 'Enter') {
        let updatedTodos = this.state.todos // This is just utating the original
        // this.state.newTodo = ''
        updatedTodos.push({
            text: e.target.value,
            done: false
        })
        this.setState({
            newTodo: '',
            todos: updatedTodos
        })
        console.log(updatedTodos)
        myStorage.setItem('todos', updatedTodos) // set local storage to updated todos
    }
}

markDone(i) {
    let updatedTodos = this.state.todos // making copy of todos

    updatedTodos[i].done = !updatedTodos[i].done // same as below and better than below
    // if (updatedTodos[i].done === false) {
    //     updatedTodos[i].done = true
    // }
    // else {
    //     updatedTodos[i].done = false
    // }

    this.setState({
        todos: updatedTodos
    })
}

render() {  // Have to have a render for stateful class and has to return JSX code.
    const TodoItems = this.state.todos.map((todo, i) => {
        return <TodoItem data={todo} key={i} markDone={() => this.markDone(i)} />  // markDone arrow function runs  the code when onClick checks the box.
    })

    return (
        <div>
        <br />
        <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter}/>
        <ul className="list-group">
        {TodoItems}
        </ul>
        </div>
    )

}
}

// console.log(myStorage)
export default Todos
