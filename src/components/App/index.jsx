import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header'
import Player from '../Player'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">

        <Header title={this.props.title}/>

        <div className="players">
          {this.props.players.map((player) => {
            return <Player key={player.id} name={player.name} score={player.score}/>
          })}
        </div>

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
