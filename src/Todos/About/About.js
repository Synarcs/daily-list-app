import React from 'react'

export default function About() {
  return (
      <React.Fragment>
          <h1>This is about page</h1>
          <div className="about-content" style={Style}>
            <p>the todo app 
                <b>version:1.0.0.2</b>
                <b>Mit license</b>
            </p>
          </div>
      </React.Fragment>
  )
}   

const Style = {
    color:'#cea135',
    fontsize:'1.2rem',
    padding:'1rem 1.2rem',
}