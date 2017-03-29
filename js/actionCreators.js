import { SET_TEXT_VAL, SET_ASYNC_DATA } from './actions.js'
import axios from 'axios'

export function setTextVal (val) {
  return {type: SET_TEXT_VAL, val}
}

export function setAsyncData (val) {
  return {type: SET_ASYNC_DATA, val}
}

export function getAsyncData (val) {
  return function (dispatch, getState) {
    axios.get('https://helloacm.com/api/fortune/')
    .then((response) => {
      dispatch(setAsyncData(response.data))
    })
    .catch((error) => {
      console.log(`Error obtaining adage: ${error}`)
    })
  }
}
