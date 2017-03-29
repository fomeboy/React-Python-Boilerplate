import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import Landing from './Landing.js'
import RoutingPage from './RoutingPage.js'
import ReduxPage from './ReduxPage.js'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Route exact path='/' component={Landing} />
            <Route path='/testRoute' component={(props) => <RoutingPage {...props}/>} />
            <Route path='/reduxPage' component={(props) => <ReduxPage {...props}/>} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
