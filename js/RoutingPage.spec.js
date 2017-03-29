/* globals test, expect */
import React from 'react'
import RoutingPage from './RoutingPage.js'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Routing page snapshot test', () => {
  const component = renderer.create(<RoutingPage/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Routing page enzyme test', () => {
  const component = shallow(<RoutingPage/>)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Test number of rendered components', () => {
  const component = shallow(<RoutingPage/>)
  expect(5).toEqual(component.find('h3').length)
})
