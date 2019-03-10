import { createStore, combineReducers } from 'redux'
import { mapReducer as map } from 'features/map/reducer'
import { playerReducer as player } from 'features/player/reducer'

const rootReducer = combineReducers({
  map,
  player
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store