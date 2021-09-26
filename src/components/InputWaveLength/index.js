import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { StateDispatch, State, updateWaveLength } from '../../context/State'
import {Typography} from '@material-ui/core'

const InputWaveLength = _ => {

  const dispatch = StateDispatch()
  const { waveLength, velocityFactor } = State()

  const updateInput = evt => {
    updateWaveLength(dispatch, Number(evt.target.value) > 0 ? evt.target.value : '')
  }

  const calulatedFrequency = 300000000 / waveLength / 1000000 / (velocityFactor / 100)

  return (
    <div style={InputStyle}>
      <Card style={CardStyle} elevation={4}>
        <Typography style={TypographyStyle}>
          <i style={{fontSize: '22px', paddingRight: '10px'}}>ƒ</i>
          {calulatedFrequency} MHz
        </Typography>
        <TextField
          type='number'
          inputProps={{
            step: 0.001,
            min: 0.001,
            type: 'number'
          }}
          value={waveLength}
          label={<div style={{marginTop: '-6px', fontSize: '22px', marginRight: '-58px'}}>
            <i style={{paddingRight: '10px'}}>λ</i>
            Wave length in meters
          </div>}
          variant='outlined'
          onChange={updateInput}
          style={InputStyle}
        />
      </Card>
    </div>
  )
}

export default InputWaveLength

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
