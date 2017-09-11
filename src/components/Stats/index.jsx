import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Stats extends Component {
  render(){
    let totalPlayers = this.props.players.length
    let totalPoints = this.props.players.reduce((total, player)=> {
      return total + player.score
    }, 0)
    return(
      <table className="stats">
        <tbody>
          <tr>
            <td>Players: </td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points: </td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Stats.propTypes = {
  players: PropTypes.array.isRequired,
}

export default Stats
