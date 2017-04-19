import React from 'react'
import D3graph from './D3graph.js'

const data = [10, 20, 30, 40, 50]

const D3Page = React.createClass({
  render () {
    return (
      <div>
        <h1>D3 scatter-plot</h1>
        <svg>
          <D3graph chartData={data}/>
        </svg>
      </div>
    )
  }
})

export default D3Page
