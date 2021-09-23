import React from 'react'
import InputFrequency from '../InputFrequency'
import InputWaveLength from '../InputWaveLength'
import InputVelocityFactor from '../InputVelocityFactor'

const WaveLength = _ => {

  return (
    <div style={flexRow}>
    <div style={flexColumn}>
      <InputWaveLength />
      <InputFrequency />
      <InputVelocityFactor />
    </div>
    </div>
  )
}

const flexRow = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '50px'
}

const flexColumn = {
  width: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export default WaveLength
