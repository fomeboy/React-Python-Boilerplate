import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing.js'
import RoutingPage from './RoutingPage.js'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route path='/testRoute' component={RoutingPage} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
