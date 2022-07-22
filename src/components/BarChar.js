import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

export const BarChar = ({chardata}) => {
  return (
    <div><Bar data={chardata}/></div>
  )
}
