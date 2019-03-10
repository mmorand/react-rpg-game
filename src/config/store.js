import { createStore, combineReducers } from 'redux'
import { playerReducer as player } from 'features/player/reducer'

const rootReducer = combineReducers({
  player
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store