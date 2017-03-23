import React from 'react'

const TextComponent = React.createClass({
  render () {
    return (
      <p>{this.props.text}</p>
    )
  }
})

export default TextComponent
