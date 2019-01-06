import React, { Component } from 'react'
import propType from 'prop-types'
export class Todoitem extends Component {
  getstyle=(e)=>{
      return{
        background:'#051923',
        padding : '20px',
        color : '#cea135',
        textDecoration: this.props.element.completed ? 'line-through':'none'
      } 
  }
  btn_style=(e)=>{
    return{
      backgroundColor:'#ff0000',
      color:'#fff',
      border:'none',
      padding:'5px 10px',
      borderRadius:'50%',
      cursor:'pointer',
      float:'right',
      width:'40px'
    }
  }
  render() {
    const [a,b]=[this.props.element.id,this.props.element.title]
   // eslint-disable-next-line 
    return (
      <div style={this.getstyle()}>
        <p>
          <input type="checkbox"  id="hello" onChange={this.props.change_val.bind(this,this.props.element.id)}/> 
          {this.props.element.title}
          <button style={this.btn_style()} onClick={this.props.value_change.bind(this,this.props.element.id)}>X</button>
        </p>
      </div>
    )
  }
}

Todoitem.propType={
  todos1 : propType.object.isRequired
}


export default Todoitem;
