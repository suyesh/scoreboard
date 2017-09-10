import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  state = {
    score: this.props.initialScore
  }

  incrementScore = (e) => {
    e.preventDefault()
    this.setState({score: this.state.score + 1})
  }

  decrementScore = (e) => {
    e.preventDefault()
    this.setState({score: this.state.score - 1})
  }

  render(){
    return(
      <div className="counter">
        <button onClick={(e) => this.decrementScore(e)} className="counter-action decrement">-</button>
        <div className="counter-score">{this.state.score}</div>
        <button onClick={(e) => this.incrementScore(e)} className="counter-action increment">+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialScore: PropTypes.number.isRequired,
}
export default Counter;
