import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from 'config/constants'
import 'features/map/styles.css'

function getTileSprite(type) {
  switch(type) {
    case 0:
      return 'grass'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
    default:
  }
}

function MapTile(props) {
  return <div
   className={`tile ${getTileSprite(props.tile)}`}
   style={{
    height: SPRITE_SIZE,
    width: SPRITE_SIZE
  }} />
}

function MapRow(props) {
  return <div style={{
    height: SPRITE_SIZE
  }}>
  {
    props.tiles.map( (tile, i) => <MapTile tile={tile} key={i} /> )
  }
  </div>
}

function UnconnectedMap(props) {
  return (
    <div
      style={{
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        border: '4px solid white'
      }}
    >
    {
      props.tiles.map( (row, i) => <MapRow tiles={row} key={i} /> )
    }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state.map
  }
}

export default connect(mapStateToProps)(UnconnectedMap)