import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { StateDispatch, State, updateFrequency } from '../../context/State'
import {Typography} from '@material-ui/core'

const InputFrequency = _ => {

  const dispatch = StateDispatch()
  const { frequency, velocityFactor } = State()

  const updateInput = evt => {
    updateFrequency(dispatch, evt.target.value)
  }

  const calculatedWaveLength = 300000000 /
    (frequency * 1000000) * (100 / velocityFactor)

  return (
    <div style={InputStyle}>
      <Card style={CardStyle}>
        <Typography style={TypographyStyle}>
          <i style={{fontSize: '22px', paddingRight: '10px'}}>λ</i>
          {calculatedWaveLength} m
        </Typography>
        <TextField
          type='number'
          inputProps={{ min: 0 }}
          value={frequency}
          label={<div style={{marginTop: '-6px'}}>
            <i style={{fontSize: '22px', paddingRight: '10px'}}>ƒ</i>
            Frequency in MHz
          </div>}
          variant='outlined'
          onChange={updateInput}
          style={InputStyle}
        />
      </Card>
    </div>
  )
}

export default InputFrequency

const InputStyle = {
  width: '100%'
}

const CardStyle = {
  margin: '10px',
  padding: '20px'
}

const TypographyStyle = {
  paddingBottom: '20px',
  fontSize: '20px'
}