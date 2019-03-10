const initialState = {
  name: 'bob',
  orientation: [0, 0],
  position: [0, 0]
}

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...initialState,
        ...action.payload
      }
    default:
      return state
  }
}