import { SET_TEXT_VAL, SET_ASYNC_DATA } from './actions.js'

const DEFAULT_STATE = {
  textVal: '',
  asyncVal: ''
}

const setTextVal = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {textVal: action.val})
  return newState
}

const setAsyncData = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {asyncVal: action.val})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TEXT_VAL:
      return setTextVal(state, action)
    case SET_ASYNC_DATA:
      return setAsyncData(state, action)
    default:
      return state
  }
}

export default rootReducer
