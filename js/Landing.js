import React from 'react'
import TextComponent from './TextComponent.js'
import { Link } from 'react-router-dom'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <h2>Welcome to React/Python boilerplate!</h2>
        <TextComponent text='I am a text component'/>
        <Link to='/testRoute'>Navigate to another url</Link>
      </div>
    )
  }
})

export default Landing
