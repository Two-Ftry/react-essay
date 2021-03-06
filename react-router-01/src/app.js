import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const data = [
    {
        text: '001',
        completed: false,
    },
    {
        text: '002',
        completed: false,
    },
]

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => {
                    return (<TodoList todos={data} />)
                }}/>
                <Route path="/addTodo" render={() => {
                    return (<AddTodo />)
                }}/>
            </div>
        )
    }
}

export default App