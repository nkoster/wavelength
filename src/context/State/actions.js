export const updateFrequency = async (dispatch, payload) => {
  dispatch({ type: 'updateFrequency', payload})
}

export const updateWaveLength = async (dispatch, payload) => {
  dispatch({ type: 'updateWaveLength', payload})
}

export const updateVelocityFactor = async (dispatch, payload) => {
  dispatch({ type: 'updateVelocityFactor', payload})
}
