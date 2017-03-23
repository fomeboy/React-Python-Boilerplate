import React from 'react'
import { render } from 'react-dom'
import TextComponent from './TextComponent.js'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <h1>Welcome to React!</h1>
        <TextComponent text='I am a text component' />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
