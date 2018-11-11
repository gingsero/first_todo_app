import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        <TodoListItem itemList={this.state.todoItems}/>
      </ul>
    )
  }
}

export default TodoList;
