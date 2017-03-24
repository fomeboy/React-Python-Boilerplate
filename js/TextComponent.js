import React from 'react'
const { string } = React.PropTypes

const TextComponent = React.createClass({
  propTypes: {
    text: string.isRequired
  },
  getInitialState () {
    return {text: this.props.text}
  },
  render () {
    return (
      <p>{this.state.text}</p>
    )
  }
})

export default TextComponent
