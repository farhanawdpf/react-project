import React, { Component } from 'react'

export default class Officer extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count : 0
     }
   }

   incrimnt = () => { 
    this.setState({ 
        count : this.state.count + 1
    })
   }
   dicrimnt = () => { 
    this.setState({ 
        count : this.state.count - 1
    })
   }
  render() {
    const {count} = this.state
    return ( 
      <div> 
        <h2>Count : {count}</h2>
        <button onClick={this.incrimnt}>Incriment</button> 
      </div>
    )
  }
}
