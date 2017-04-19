import React from 'react'

const circlesRender = (val, i) => {
  const attr = {
    cx: val,
    cy: val,
    r: 4,
    key: i
  }

  return <circle {...attr} />
}

export default (props) => {
  return <g>{props.chartData.map((val, i) => circlesRender(val, i))}</g>
}

