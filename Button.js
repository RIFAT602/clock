import React, { Component } from 'react'


export default class Button extends Component {
  render() {
      const{change,locale}=this.props;
    return (
      <div >
          {/* <button type="button" onClick={()=>change(locale)}>click Here</button> */}
          <button type='button' onClick={()=>change(locale)}>
            
            {locale ==='bn-BD'?'CHANHE THE CLOCK' :'ঘড়ি পরিবর্তন করুন'}</button>
           </div>
    )
  }
}
