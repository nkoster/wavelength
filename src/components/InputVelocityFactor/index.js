import React from 'react'
import {Card, styled, Grid, Typography, Slider, Input} from '@material-ui/core'
import {StateDispatch, State, updateVelocityFactor} from '../../context/State'

const MyInput = styled(Input)`
  width: 42px
`

const InputVelocityFactor = _ => {

  const dispatch = StateDispatch()
  const { velocityFactor } = State()

  const handleSliderChange = (_, newValue) => {
    updateVelocityFactor(dispatch, newValue < 1 ? 1 : newValue)
  }

  const handleInputChange = (evt) => {
    updateVelocityFactor(dispatch, evt.target.value === '' ? 100 : Number(evt.target.value))
  }

  const handleBlur = () => {
    if (velocityFactor < 1) {
      updateVelocityFactor(dispatch, 1)
    } else if (velocityFactor > 100) {
      updateVelocityFactor(dispatch, 100)
    }
  }

  return (
    <div style={InputStyle}>
      <Card style={CardStyle} elevation={4}>
        <Typography style={TypographyStyle}>
          Velocity Factor VF {<MyInput
          value={velocityFactor}
          size='small'
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 1,
            max: 100,
            type: 'number',
            style: {width: '60px', margin: '10px'},
            'aria-labelledby': 'input-slider',
          }}
        />} %
        </Typography>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs>
            <Slider
              value={typeof velocityFactor === 'number' ? velocityFactor : 100}
              onChange={handleSliderChange}
              aria-labelledby='input-slider'
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default InputVelocityFactor

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