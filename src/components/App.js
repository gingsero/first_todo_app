import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoItems : []
    }
  }

  render(){
    return (
      <div className="App">
        <h2>My first todo app</h2>
        <TodoInput itemList={this.state.todoItems}/>
        <TodoList itemsList={this.state.todoItems}/>
      </div>
    )
  }
}

export default App;
