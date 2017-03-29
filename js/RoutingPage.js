import React from 'react'

const data = [
  {
    'key': 1,
    'value': 'Item 1',
    'year': 1970
  },
  {
    'key': 2,
    'value': 'Item 2',
    'year': 1976
  },
  {
    'key': 3,
    'value': 'Item 3',
    'year': 1990
  },
  {
    'key': 4,
    'value': 'Item 4',
    'year': 2010
  }
]

const RoutingPage = React.createClass({
  render () {
    return (
      <div>
        <h3>{`Route ${this.props.match.path} is Working!`}</h3>
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
