import store from 'config/store'
import * as GameConst from 'config/constants'

export function handleMovement(player) {

  function getNewPosition(direction) {
    const oldPosition = store.getState().player.position
    let newX = oldPosition[0]
    let newY = oldPosition[1]

    switch (direction) {
      case 'WEST':
        newX = Math.max(GameConst.MIN_WORLD_X, oldPosition[0] - GameConst.SPRITE_SIZE)
        break
      case 'EAST':
        newX = Math.min(GameConst.MAX_WORLD_X, oldPosition[0] + GameConst.SPRITE_SIZE)
        break
      case 'NORTH':
        newY = Math.max(GameConst.MIN_WORLD_Y, oldPosition[1] - GameConst.SPRITE_SIZE)
        break
      case 'SOUTH':
        newY = Math.min(GameConst.MAX_WORLD_Y, oldPosition[1] + GameConst.SPRITE_SIZE)
        break
      default:
    }

    return [newX, newY]
  }

  function getNewOrientation(direction) {
    switch(direction) {
      case 'WEST':
        return GameConst.FACE_WEST
      case 'EAST':
        return GameConst.FACE_EAST
      case 'NORTH':
        return GameConst.FACE_NORTH
      case 'SOUTH':
      default:
        return GameConst.FACE_SOUTH
    }
  }

  function directionMove(direction) {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: getNewPosition(direction),
        orientation: getNewOrientation(direction)
      }
    })
  }

  function handleKeyDown(e) {
    e.preventDefault()
    switch(e.keyCode) {
      case 37:
        return directionMove('WEST')
      case 38:
        return directionMove('NORTH')
      case 39:
        return directionMove('EAST')
      case 40:
        return directionMove('SOUTH')
      default:
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })
  
  return player
}