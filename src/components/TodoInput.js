import React, { Component } from 'react';
import './css/TodoInput.css';

class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      initPlaceHolder : '할 일을 입력하세요.'
    }
  }

  onChangeInput = (e) => {
    console.log(e.target.value);
    this.setState({
      initPlaceHolder : e.target.value
    })
    // 아래처럼 하면 지역변수로 사용됨
    // this.setState = {
    //   initPlaceHolder : e.target.value
    // }
  }

  onAddTodoItem = (e) => {
    console.log(this.state.initPlaceHolder);
    // this.setState({
    //   todoItems : [...this.state.todoItems, this.state.initPlaceHolder]
    // })
  }

  render() {
    return (
      <div>
        <input
          className="inputLine"
          placeholder={this.state.initPlaceHolder}
          onChange={this.onChangeInput}
          />
        <button onClick={this.onAddTodoItem}>추가하기</button>
      </div>
    )
  }
}

export default TodoInput;
