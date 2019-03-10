import React from 'react'
import { connect } from 'react-redux'
import { handleMovement } from 'features/player/movement'
import walkSprite from 'features/player/player_walk.png'

export function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
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