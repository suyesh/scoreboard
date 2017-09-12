import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PlayerActionCreators from '../../actions/player'
import PropTypes from 'prop-types';
import Header from '../../components/Header'
import Player from '../../components/Player'
import AddPlayerForm from '../../components/AddPlayerForm'
import './App.css';

class ScoreBoard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        key={player.name}
        score={player.score}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ))
    return (
      <div className="scoreboard">

        <Header title="Scoreboard" players={players}/>

        <div className="players">
          {playerComponents}
        </div>
          <AddPlayerForm addPlayer={addPlayer}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state
  }
)



export default connect(mapStateToProps)(ScoreBoard);
