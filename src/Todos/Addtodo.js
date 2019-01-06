import React from 'react'

class addtodo extends React.Component {
  state={
    title:''
  }
  onchange =(e)=>{this.setState({title:e.target.value
    })
  }
  onsubmit=(e)=>{
    e.preventDefault();
    if(this.state.title ){
    this.props.addtodo(this.state.title);
    this.setState({
      title : ''
    })
  }
  }
  
  render(){
    return (
      <div>
          <form style={{display:'flex'}} onSubmit={this.onsubmit}>
              <input type="text" name="title" placeholder="add todo" style={{flex:8,padding:'5px',fontFamily:'cursive'}} onChange ={this.onchange}/>
             
              <input type="submit" value="submit" className="btn" style={{flex:1, display:'inlineblock',backgroundColor:'grey',border:'none'}} onClick={this.onSubmit}/>
          </form>
      </div>
    )
  }
}



export default addtodo;