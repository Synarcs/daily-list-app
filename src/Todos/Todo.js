import React, { Component } from 'react';
import  TodoItem  from './Todoitem'
import propType from 'prop-types'


class Todo extends Component{
    render(){
            return this.props.todos1.map(element=>(
            <TodoItem element={element} change_val={this.props.change_val} value_change={this.props.value_change}/>
            ));
    }
}

// prop Types
Todo.propType={
    todos1 : propType.array.isRequired
}

export default Todo;
  