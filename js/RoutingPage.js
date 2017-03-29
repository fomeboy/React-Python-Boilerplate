import React from 'react'

const data = [
  {
    'key': 1,
    'value': 'Always on my mind',
    'year': 1970
  },
  {
    'key': 2,
    'value': 'the days of thunder',
    'year': 1976
  },
  {
    'key': 3,
    'value': 'Whatever the case might be',
    'year': 1990
  },
  {
    'key': 4,
    'value': 'The vanguard was advancing',
    'year': 2010
  }
]

const RoutingPage = React.createClass({
  render () {
    return (
      <div>
        <h3>{`Route ${this.props.match.path} is working!`}</h3>
        {data.map((item, i) => {
          return (
            <h3 key={i}>{item.value}</h3>
          )
        })}
      </div>
    )
  }
})

export default RoutingPage
