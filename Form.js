import React, { Component } from 'react'

export default class extends Component {
    state={
        title:'javascript',
    }
    handleclick=(e)=>{
     this.setState ({title:e.target.value})
          }

  render() {
      const{title}=this.state;
    return (
      <div>
          <from>
              <input type='text' placeholder='enter the value' value={title} onChange={this.handleclick}></input>
          </from>
      </div>
    )
  }
}
