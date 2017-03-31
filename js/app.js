import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import RoutingPage from './RoutingPage'
import ReduxPage from './ReduxPage'

if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Route exact path='/' component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Landing')} />}
        />
        <Route path='/testRoute' component={(props) => <RoutingPage {...props}/>} />
        <Route path='/reduxPage' component={(props) => <ReduxPage {...props}/>} />
      </div>
    </Provider>
  )
}

export default App
