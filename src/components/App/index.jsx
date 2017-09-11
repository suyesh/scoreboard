import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header'
import Player from '../Player'
import AddPlayerForm from '../AddPlayerForm'
import './App.css';

class App extends Component {
  state = {
    players: this.props.players,
    nextId: 3
  }

  onScoreChange = (index, delta)=> {
    let newPlayers = this.state.players.map((player, playerindex) => {
      if (playerindex === index) {
        player.score += delta
      }
      return player
    })
    this.setState({players: newPlayers})
  }

  onPlayerAdd = (name)=> {
    this.state.players.push({
      name: name,
      score: 0,
      id: this.state.nextId
    })
    this.setState(this.state)
    this.setState({nextId: this.state.nextId + 1})
  }

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1)
    this.setState(this.state)
  }

  render() {
    return (
      <div className="scoreboard">

        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onScoreChange={(delta) => this.onScoreChange(index, delta)}
                onRemove={() => this.onRemovePlayer(index)}
                key={player.id}
                name={player.name}
                score={player.score}/>
            )
          })}
        </div>
          <AddPlayerForm onAdd={this.onPlayerAdd}/>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
};

App.defaultProps = {
  title: "Scoreboard"
}

export default App;
