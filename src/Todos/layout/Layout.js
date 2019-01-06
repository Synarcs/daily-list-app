import React from 'react'
import {Link} from 'react-router-dom'

export default function layout() {
  return (
    <div>
      <header style={header}>
          <h1>Todo List</h1>
          <Link to="/home" style={{color:'yellow'}}>Home</Link> | <Link to="/about" style={{color:'yellow'}}>about</Link>
         
      </header>
    </div>
  )
}

const header={
  color :'#560000',
  fontsize:'1.2rem',
  boxshadow:'1 2 1.3rem rgba(0,0,0,0.3)'
}
