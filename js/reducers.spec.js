/* globals test, expect */
import reducers from './reducers'

test('Change textVal', () => {
  let state
  state = reducers({textVal: '', asyncVal: 'Excellent day for putting Slinkies on an escalator.\n'}, {type: 'SET_TEXT_VAL', val: 'teste string'})
  expect(state).toEqual({textVal: 'teste string', asyncVal: 'Excellent day for putting Slinkies on an escalator.\n'})
})

test('@@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({textVal: '', asyncVal: ''})
})
