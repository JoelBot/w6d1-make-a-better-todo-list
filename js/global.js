import React from 'react' // imports react and children below
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'


// creates rendering machine for React
// function renderView(todo) {
function renderView() {
    ReactDOM.render(
        <Todos />,
        document.getElementById('todoList')
    )
}

// renders the page per above
renderView()
