// import React, { Component } from 'react'
// import Button from './Button';

// export default class Clock extends Component {
//    state={date:new Date(),locale:'bn-BD'}

// componentDidMount(){
//   setInterval(() => this.tick(), 1000);
// }
// tick(){
//    this.clockTimer=this.setState({date:new Date()})
  
// }
// componentWillUnmount(){
//   clearInterval(this.clockTimer)
// }
// handleclick=(locale)=>{
//   this.setState({locale})

// }
 
//   render() {
//     const{date,locale}=this.state
    
//     return (
//       <>
//       <h1 className='heading'>
//         <span className='texting'>{date.toLocaleTimeString(locale)}</span>
//       </h1>
//       <Button change={this.handleclick} locale='en-US'></Button>
//    </>
//     )
//   }
// }
import React, { Component } from 'react'
import Button from './Button';

export default class Clock extends Component {

  state={date:new Date(),locale:'en-us'}

 componentDidMount(){
  setInterval(() => this.tick(), 1000);
  
 }

 tick(){this.clocktime=this.setState({date:new Date()})
    
}
componentWillUnmount(){
  clearInterval(this.clocktime)
}
handleclick=(locale)=>{
 this.setState({ locale})
}
  render() {
    const {date,locale}=this.state;
    let button;
 if(locale==='bn-BD'){
   button=(
    <Button change={this.handleclick} locale='en-US'></Button>
   )
 }
 else{
  button=(<Button change={this.handleclick} locale='bn-BD'></Button>)
 }
    return (
      <div>
        <h1 className='Heading'>
          <span className='texting'>{date.toLocaleTimeString(locale)}</span>

        </h1>
        {button}
      </div>
    )
  }
}

