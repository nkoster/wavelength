import React from 'react'
import Card from '@material-ui/core/Card'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import MuiInput from '@material-ui/core/Input'

import { StateDispatch, State, updateVelocityFactor } from '../../context/State'

const Input = styled(MuiInput)`
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
      <Card style={CardStyle}>
        <Box sx={{ width: '100%' }}>
          <Typography style={TypographyStyle}>
            Velocity Factor VF {velocityFactor} %
          </Typography>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <Input
                value={velocityFactor}
                size='small'
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
            <Grid item xs>
              <Slider
                value={typeof velocityFactor === 'number' ? velocityFactor : 100}
                onChange={handleSliderChange}
                aria-labelledby='input-slider'
              />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  )
}

export default InputVelocityFactor

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