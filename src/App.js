import React, { Component } from 'react';
import './Style.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './Todos/Todo'
import Layout from './Todos/layout/Layout';
import Form  from './Todos/Addtodo';
import About from './Todos/About/About';
import uuid  from 'uuid';
import axios from 'axios';
class App extends Component{
  state={
    head:'my todo app',
    todos:[
    
    ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>{
      if(res.data){
      this.setState({
        todos:res.data
      })
    
    }})
    .catch(err=>{
      console.log(err); 
    })
  }
  change_val=(id)=>{
    this.setState({
      todos:this.state.todos.map(element=>{
        if(element.id===id){
          element.completed = !element.completed;
        }
        return element
      })
    });
  }
  value_change=(id)=>{
   this.setState({
     todos:[...this.state.todos.filter(element=> element.id !==id)]
   });
  }
  addtodo=(title)=>{
    // console.log(title);
    const new_val = {
      id : Math.floor(Math.random()*10),
      title: title,
      completed : true 
    }
    this.setState({
      todos:[...this.state.todos,new_val]
    });
  }
  render(){
    return(
      <Router>
      <div className="App">
        <div className="conatiner">
          <Layout />  
            <Route exact path="/home" render={props=>(
                <React.Fragment>
                    <Form  addtodo={this.addtodo}/>
                    <Todos todos1={this.state.todos} change_val={this.change_val} value_change={this.value_change}/>

                </React.Fragment>
            )} />
            <Route path="/about" component={About} />
        </div>
       </div>
      </Router>
    );
  }
}


export default App; 
