import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { StateDispatch, State, updateWaveLength } from '../../context/State'
import {Typography} from '@material-ui/core'

const InputWaveLength = _ => {

  const dispatch = StateDispatch()
  const { waveLength } = State()

  const updateInput = evt => {
    updateWaveLength(dispatch, evt.target.value)
  }

  const calulatedFrequency = 300000000 / waveLength / 1000000

  return (
    <div style={InputStyle}>
      <Card style={CardStyle}>
        <Typography style={TypographyStyle}>
          <i style={{fontSize: '22px', paddingRight: '10px'}}>ƒ</i>
          {calulatedFrequency} MHz
        </Typography>
        <TextField
          type='number'
          value={waveLength}
          label={<div style={{marginTop: '-6px'}}>
            <i style={{fontSize: '22px', paddingRight: '10px'}}>λ</i>
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
  margin: '10px',
  padding: '20px'
}

const TypographyStyle = {
  paddingBottom: '20px',
  fontSize: '20px'
}
