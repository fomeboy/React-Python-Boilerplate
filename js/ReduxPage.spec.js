/* globals test, expect */
import React from 'react'
import { Provider } from 'react-redux'
import store from './store.js'
import { setTextVal } from './actionCreators.js'
import ReduxPage from './ReduxPage.js'
import { render } from 'enzyme'

test('Test dispatch action', () => {
  store.dispatch(setTextVal('new val'))
  const component = render(<Provider store={store}><ReduxPage/></Provider>)
  expect('Redux state: new val').toEqual(component.find('p').text())
})
