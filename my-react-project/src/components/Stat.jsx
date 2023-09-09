import React, { Component } from 'react'
import { useState } from 'react'

export default class Stat extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrmnt = () => { 
        this.setState({ 
              count : this.state.count + 1
        })
    }
    decrimnt = () => { 
        this.setState({ 
            count: this.state.count -2
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div> 
        <h1>Count Add : {count}</h1>

        <button onClick={this.incrmnt}>Incriment</button><br/>
        <button onClick={this.decrimnt}>Decrimnt</button>

      </div>
    )
  }
}
