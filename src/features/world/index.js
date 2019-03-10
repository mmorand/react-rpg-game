import React from 'react'
import { MAP_HEIGHT, MAP_WIDTH } from 'config/constants'
import Map from 'features/map'
import Player from 'features/player'

function World(props) {
  return (
    <div
      style={{
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        margin: '20px auto',
        position: 'relative'
      }}
    >
        <Map />
        <Player />
    </div>
  )
}

export default World