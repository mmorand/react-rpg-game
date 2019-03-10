import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from 'config/constants'
import { handleMovement } from 'features/player/movement'
import walkSprite from 'features/player/player_walk.png'

export function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1] * SPRITE_SIZE,
        left: props.position[0] * SPRITE_SIZE,
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: props.orientation[0] + 'px ' + props.orientation[1] + 'px',
        width: '40px',
        height: '40px'
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(handleMovement(Player))