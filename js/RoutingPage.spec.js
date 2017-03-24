/* globals test, expect */
import React from 'react'
import RoutingPage from './RoutingPage.js'
import renderer from 'react-test-renderer'

test('Routing page snapshot teste', () => {
  const component = renderer.create(<RoutingPage/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
