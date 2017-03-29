import React from 'react'
import { connect } from 'react-redux'
import { setTextVal, getAsyncData } from './actionCreators.js'
const { string, func } = React.PropTypes

const ReduxPage = React.createClass({
  propTypes: {
    textVal: string,
    asyncVal: string,
    disptach: func
  },
  componentDidMount () {
    this.props.dispatch(getAsyncData())
  },
  handleChange (event) {
    this.props.dispatch(setTextVal(event.target.value))
  },
  render () {
    return (
      <div>
        <h2>Redux component example</h2>
        <p>{`Redux state: ${this.props.textVal}`}</p>
        <input type='text' onChange={this.handleChange}></input>
        <br/>
        <br/>
        <h4>Async redux adage:</h4>
        <p>{this.props.asyncVal}</p>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    textVal: state.textVal,
    asyncVal: state.asyncVal
  }
}

export default connect(mapStateToProps)(ReduxPage)
