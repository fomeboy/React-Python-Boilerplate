import React from 'react'
import { Link } from 'react-router-dom'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <h2>Welcome to React/Python boilerplate!</h2>
        <Link to='/testRoute'>Navigate to another url</Link>
        <br/>
        <br/>
        <Link to='/reduxPage'>Test redux component</Link>
        <br/>
        <br/>
        <Link to='/d3Page'>D3 component</Link>
      </div>
    )
  }
})

export default Landing
