import React from 'react'
import {Card, TextField, Typography} from '@material-ui/core'
import {StateDispatch, State, updateFrequency} from '../../context/State'

const InputFrequency = _ => {

  const dispatch = StateDispatch()
  const { frequency, velocityFactor } = State()

  const updateInput = evt => {
    updateFrequency(dispatch, evt.target.value)
  }

  const calculatedWaveLength = 300000000 /
    (frequency * 1000000) * (velocityFactor / 100)

  return (
    <div style={InputStyle}>
      <Card style={CardStyle} elevation={4}>
        <Typography style={TypographyStyle}>
          <i style={{fontSize: '22px', paddingRight: '10px'}}>λ</i>
          {calculatedWaveLength} m
        </Typography>
        <TextField
          type='number'
          inputProps={{ min: 0 }}
          value={frequency}
          label={<div style={{marginTop: '-6px', fontSize: '22px', marginRight: '-46px'}}>
            <i style={{paddingRight: '10px'}}>ƒ</i>
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
  margin: '20px',
  padding: '20px'
}

const TypographyStyle = {
  paddingBottom: '20px',
  fontSize: '20px'
}