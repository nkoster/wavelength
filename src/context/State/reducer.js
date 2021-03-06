export const initialState = {
  frequency: '145.300', waveLength: Math.sqrt(300), velocityFactor: 100
}

export const StateReducer = (state = initialState, action) => {
  console.log('DISPATCH', action.type)
  switch (action.type) {
    case 'updateFrequency':
      return {
        ...state, frequency: action.payload
      }
    case 'updateWaveLength':
      return {
        ...state, waveLength: action.payload
      }
    case 'updateVelocityFactor':
      return {
        ...state, velocityFactor: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
