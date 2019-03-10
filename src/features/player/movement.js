import store from 'config/store'
import * as GameConst from 'config/constants'

export function handleMovement(player) {

  function getNewPosition(direction) {
    const oldPosition = store.getState().player.position
    let newX = oldPosition[0]
    let newY = oldPosition[1]

    switch (direction) {
      case 'WEST':
        newX = oldPosition[0] - 1
        break
      case 'EAST':
        newX = oldPosition[0] + 1
        break
      case 'NORTH':
        newY = oldPosition[1] - 1
        break
      case 'SOUTH':
        newY = oldPosition[1] + 1
        break
      default:
    }

    return [newX, newY]
  }

  function isWalkableTile(tile) {
    return tile === 0
  }

  function observeBoundaries(oldPosition, newPosition) {
    const mapTiles = store.getState().map.tiles
    console.log(newPosition[1], newPosition[0])
    if (
      mapTiles[newPosition[1]] !== undefined &&
      mapTiles[newPosition[1]][newPosition[0]] !== undefined
    ) {
      const observingTile = mapTiles[newPosition[1]] && mapTiles[newPosition[1]][newPosition[0]]
      return isWalkableTile(observingTile) ? newPosition : oldPosition
    }
    return oldPosition
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
    const oldPosition = store.getState().player.position
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: observeBoundaries(oldPosition, getNewPosition(direction)),
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