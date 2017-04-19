import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import RoutingPage from './RoutingPage'
import ReduxPage from './ReduxPage'
import D3Page from './D3Page.js'

if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Route exact path='/' component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Landing')} />} />
        <Route path='/testRoute' component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./RoutingPage.js')} />} />
        <Route path='/reduxPage' component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./ReduxPage.js')} />} />
        <Route path='/d3Page' component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./D3Page.js')} />} />
      </div>
    </Provider>
  )
}

export default App
